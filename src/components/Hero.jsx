import React from 'react'
import swiggy from "../images/swiggy.webp";
import zomato from "../images/zomato.webp";
import kfc from "../images/kfc_png.webp";
const Hero = () => {
  return (
    <div className='hero'>
        <div className='left'>
            <span className='title'>TASTE THE BEST KFC CHICKEN</span>
            <p></p>
            <div className='btns'>
                <button className='btn1'>ORDER NOW</button>
                <button className='btn2'>KFC CHICKEN</button>

            </div>
            <div className='social'>
            <span className='social1'>Also Available On</span>
            <div className='soc'>
               <img src={swiggy} alt="" />
             <img src={zomato} alt="" />

            </div>
            </div>
        </div>
        <div className='right'>
            <img src={kfc} alt="" />
        </div>
      
    </div>
  )
}

export default Hero;
