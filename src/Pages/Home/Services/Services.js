import React, { useEffect, useState } from 'react';
import Servic from '../Servic/Servic';
import './Services.css';

const Services = () => {
   const [services , setServices] = useState([]);
   useEffect(()=>{
      fetch('services.json')
      .then(res=>res.json())
      .then(data=>setServices(data))
   },[])
   return (
      <div >
         <h2 className='services-title'>car services:{services.length}</h2>
         <div className='services-container'>
         {
            services.map(servic=> <Servic  key={servic.id} servic={servic}></Servic>)
         }
         </div>
      </div>
   );
};

export default Services;