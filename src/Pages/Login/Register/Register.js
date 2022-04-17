import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Form } from 'react-bootstrap';



const Register = () => {
   const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);
   const navigate = useNavigate();
   const navigateLogIn = ()=>{
      navigate('/login');
   }
   if(user){
      navigate('/home');
      }
   
   const handleRegister = event =>{
      event.preventDefault();
      // console.log(event.target.email.value, event.target.password.value, event.target.name.value);
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password= event.target.password.value;

      createUserWithEmailAndPassword(email , password);
   }
   
   return (
      <div className='register-form'>
         <h2 className='text-center'>plz register</h2>
         <form onSubmit={handleRegister}>
            <input type="text" name="name" id="" placeholder='your name'/>
            
           <input type="email" name="email" id="" placeholder='email adress' required />
           
           <input type="password" name="password" id="" placeholder='password' required/>
           <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="accept Genius Car Terms and condition" />
            </Form.Group>
           <input type="submit" value="Register" />

         </form>
         <p>Already have an account <Link to={'/login'} className='text-danger pe-auto text-decoration-none' onClick={navigateLogIn}>Please LogIn</Link></p>
         <SocialLogin></SocialLogin>
      </div>
   );
};

export default Register;