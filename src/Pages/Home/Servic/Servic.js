import React from 'react';
import './Servic.css';

const Servic = ({servic}) => {
   const {name , price , img , description} = servic
   return (
      <div className='service'>
         <img src={img} alt="" />
         <h2>{name}</h2>
         <p>price: {price}</p>
         <p><small>{description}</small></p>
         <button>Book:{name}</button>
      </div>
   );
};

export default Servic;