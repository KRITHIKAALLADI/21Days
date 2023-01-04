import React from 'react'
import './Header.css'
import { GoLocation } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
// import './Header.scss';
const Header = () => {
  return (
    <>
    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png" alt=" " />
       
   <div classname="topnav">
        {/* <a href="#FITNESS">FITNESS</a>
      <a href="#CARE">CARE</a>
      <a href="#MIND">MIND</a>
      <a href="#STORE">STORE</a> */}
        <div className="name">
          <Link to="/Background" className="nav-item">FITNESS</Link>
          <Link to="/Img" className="nav-item">CARE</Link>
          <Link to="/MIND" className="nav-item">MIND</Link>
          <Link to="/Sportheader" className="nav-item">STORE</Link>
        </div>
        <div className="logos">
          <div className='par'>
            <p>HYDER...</p>
            </div>
            <div className='loc'>
            <GoLocation size="1.5em" />
          </div>
          <div className='get'>
            <input type="text" placeholder="GET APP" />
          </div>
          <div className='icon'>
            <FiUser size="1.5em" />
          </div>
          <div className='cart'>
            <AiOutlineShoppingCart size="1.5em" />
          </div>
        </div>
        </div>
      </>
      )
}

      export default Header