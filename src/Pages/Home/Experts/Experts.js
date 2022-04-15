import React from 'react';
import expert1 from '../../../image/New folder (2)/expert-1.jpg'
import expert2 from '../../../image/New folder (2)/expert-2.jpg'
import expert3 from '../../../image/New folder (2)/expert-3.jpg'
import expert4 from '../../../image/New folder (2)/expert-4.jpg'
import expert5 from '../../../image/New folder (2)/expert-5.jpg'
import expert6 from '../../../image/New folder (2)/expert-6.png'
import Expert from '../Expert/Expert';
const experts = [
   {id:1 , name:'will smith' , img:expert1},
   {id:2 , name:'jhon cena' , img:expert2},
   {id:3 , name:'steve watson' , img:expert3},
   {id:4 , name:'Messi vai' , img:expert4},
   {id:5 , name:'Ronaldo bro' , img:expert5},
   {id:6 , name:'neymer kaka' , img:expert6},
]

const Experts = () => {
   return (
      <div className='container'>
        <h2 className='text-primary text-center'>our experts</h2>
        <div className='row'>
           {
              experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
           }
        </div>
      </div>
   );
};

export default Experts;