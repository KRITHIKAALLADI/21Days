import React from 'react'
import "./Img1.css"
// import './Img1.scss'
const Images1 = ({image,title,views,timestamp}) => {
  return (
    <div className='videocard'>
    <img className='videocard__thumbnail' src={image} alt=""/>
    {/* <div className='videocard__info'> */}
      <div className='videocard__text'>
        <h4>{title}</h4>
       
        <p>
            {views}
            {timestamp}
        </p>
      </div>
    </div>
  )
}
export default Images1;