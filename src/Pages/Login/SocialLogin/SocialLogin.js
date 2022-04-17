import React from 'react';
import google from '../../../image/social/google.png';
import facebook from '../../../image/social/facebook.png';
import gitHub from '../../../image/social/gitHub.png';

const SocialLogin = () => {
   return (
      <div>
         <div className='d-flex  align-items-center'>
            <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
            <p className='mt-2 px-2'>or</p>
            <div style={{ height: '1px' }} className='bg-primary w-50'></div>

         </div>
         <div>
            <button className='btn btn-info d-block mx-auto w-50 my-2'>
               <img style={{width:'30px'}}  src={google} alt="" />
               <span className='px-2'>Google Sign In</span>
            </button>
            <button className='btn btn-dark d-block mx-auto w-50 my-2'>
               <img style={{width:'30px'}}  src={facebook} alt="" />
               <span className='px-2'>facebook Sign In</span>
            </button>
            <button className='btn btn-success d-block mx-auto w-50'>
               <img style={{width:'30px'}}  src={gitHub} alt="" />
               <span className='px-2'>Git hub Sign In</span>
            </button>
         </div>
      </div>
   );
};

export default SocialLogin;