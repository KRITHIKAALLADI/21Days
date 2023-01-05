import React, { useContext, useState } from 'react'
import './Sport.css'
import ThemColor from '../../Themcolor';
import { ThemeChanger } from '../../Themcolor';



import { data } from './../Data';
const Subscriptions = () => {

    const[value,setValue]=useContext(ThemeChanger);
    const [data1] = useState(data);
    return (
        <>  
    
            <div className='mainlib' style={{background:value}}>
                <img className='first' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/f87f914f-7a53-4a80-b9b6-d85d80fae1cb.png" alt=" "/>
                <h2>EXPERTS TO HELP YOU</h2>
                 <button onClick={()=>setValue("skyblue")} onMouseOver={()=>setValue("pink")}>button</button> 
            <div className='lib'>
             
                    {data1?.map((x) => (
                       <div className='imgdiv'> <img src={x.img} alt="" />
                        <div className='imgdiv2'><h3>{x.title}</h3>
                                                <p>{x.info}</p>
                                               <span style={{display:"inline-flex"}}><img src={x.img2}/><span style={{margin:"10px 0px"}}>{x.time}</span></span> 
                                               <h3>{x.price}</h3> </div>
                       
                       
                       </div>))}
            
            </div>
             <img className='second' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/8d058e84-f098-4129-b107-dc81c19af2f1.png" alt=" "/>
             <img className='third' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/7f7af73c-3ee3-46c1-9129-0df18dbb02ac.png" alt=" "/>
            </div>
            
        </>
    );
}
export default Subscriptions