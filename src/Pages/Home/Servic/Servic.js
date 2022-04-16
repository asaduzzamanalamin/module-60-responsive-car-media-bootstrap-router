import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Servic.css';

const Servic = ({servic}) => {
   const {id ,name , price , img , description} = servic;
   const navigate = useNavigate();
   const NavigateToServiceDetail = id =>{
      navigate(`/service/${id}`)
   }
   return (
      <div className='service'>
         <img src={img} alt="" />
         <h2>{name}</h2>
         <p>price: {price}</p>
         <p><small>{description}</small></p>
         <button onClick={()=>NavigateToServiceDetail(id)} className='btn btn-primary'>Book:{name}</button>
      </div>
   );
};

export default Servic;