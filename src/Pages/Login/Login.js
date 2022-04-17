import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin/SocialLogin';




const Login = () => {
   const emailRef = useRef('');
   const passwordref = useRef('');
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';
   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
   const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    if(user){
       navigate(from , {replace :true});
    }
    const resetPassword = async() => {
      const email = emailRef.current.value;
      await sendPasswordResetEmail(email);
      alert('Sent email');

    }
   const handleSubmit = event => {
      event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordref.current.value;
      console.log(email , password);
      signInWithEmailAndPassword(email , password);
   }
   const navigateRegister = event =>{
      navigate('/register');
   }
   return (
      <div className='container w-50 mx-auto'>
         <h2 className='text-primary text-center mt-2'>plz log in</h2>
  
      <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              
               <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              
               <Form.Control ref={passwordref} type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
               Submit
            </Button>
         </Form>
         <p>New to Genius Car <Link to={'/register'} className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
         <p>Forgett Password <Link to={'/register'} className='text-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</Link></p>
         <SocialLogin></SocialLogin>
      </div>
   );
};

export default Login;