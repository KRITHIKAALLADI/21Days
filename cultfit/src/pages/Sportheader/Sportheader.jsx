import React from 'react'
import './Sportheader.css'
import { FiUser } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
 const Sportheader = () => {
  return (
      <>
     <div className='head'>
     <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg" alt=" "/>
        <div className='names'>
           <div className='b'>Best sellers</div>
           <div className='b'>Just launched</div>
           <div className='b'>Just launched</div>
           <div className='b'>Just launched</div>
           <div className='b'>Just launched</div>
           <div className='b'>Just launched</div>
           <div className='b'>Just launched</div>
           <div className='b'>Just launched</div>
           
                <li>Best sellers</li>
                <li>Just launched</li>
                <li>Men</li>
                <li>Woman</li>
                <li>Cardio</li>
                <li>Cycles</li>
                <li>Accessories</li>
                <li>Supplements</li>
                <li>Equipment</li>
                <FiUser/>
                <AiOutlineShoppingCart/>

            </ul>
        </div>
     </div>
     </>
  )
}
export default Sportheader;