import React from 'react'
import './Background.css'
// import button from './button';

const Background = () => {
  return (
    <>
     <div className='one'>
    <div className='img'>
       {/* <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1600,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/7cc6e153-78ff-4b1c-b32e-b8bd75719bec.png" alt=" "/>  */}
       {/* <div class="flex-row"> */}
    <div class="double">
    <div class="flex-col">
        <h3>
          CULTPASS
        </h3>
        <h1 style={{color:"goldenrod"}}>ELITE</h1>
        <h3>
          Starting at ₹948/month
        </h3>
      </div>
      <div class="flex-col">
      <h3>
          CULTPASS
        </h3>
        <h1 style={{color:"silver"}}>PRO</h1>
        <h3>
          Starting at ₹737/month
        </h3>
      </div>
    <div class="flex-col">
    <h3>
          CULTPASS
        </h3>
        <h1 style={{color:"magenta"}}>HOME</h1>
        <h3>
          Starting at ₹96/month
        </h3>
      </div>
      </div>
  </div>
    </div>
    
    </>
  )
}

export default Background