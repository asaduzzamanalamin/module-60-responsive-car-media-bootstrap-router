import React from 'react';
import google from '../../../image/social/google.png';
import facebook from '../../../image/social/facebook.png';
import gitHub from '../../../image/social/gitHub.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   const navigate = useNavigate();
   
   let errorElement;
   if(user){
      navigate('/home');
   }
   if(error){
      errorElement= <div>
         <p className='text-danger'>Error: {error.message}</p>
      </div>
   }

   return (
      <div>
      <div className='d-flex align-items-center'>
          <div style={{ height: '1px' }} className='bg-primary w-50'></div>
          <p className='mt-2 px-2'>or</p>
          <div style={{ height: '1px' }} className='bg-primary w-50'></div>
      </div>
      {errorElement}
     
      <div className=''>
          <button
          onClick={()=>signInWithGoogle()}
              
              className='btn btn-info w-50 d-block mx-auto my-2'>
              <img style={{ width: '30px' }} src={google} alt="" />
              <span className='px-2'>Google Sign In</span>
          </button>
          <button className='btn btn-info w-50 d-block mx-auto my-2'>
              <img style={{ width: '30px' }} src={facebook} alt="" />
              <span className='px-2'>Facebook Sign In</span>
          </button>
          <button
             
              className='btn btn-info w-50 d-block mx-auto'>
              <img style={{ width: '30px' }} src={gitHub} alt="" />
              <span className='px-2'>Github Sign In</span>
          </button>
      </div>
  </div>
   );
};

export default SocialLogin;