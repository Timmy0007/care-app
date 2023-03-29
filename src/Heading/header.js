import React from 'react'
import "./header.css"
import careimg from '../assets/careimg.png'

const header = () => {
  return (
    <div className='heading'>
    <div className='header'>

        <div className='section1'>
        <img className='careimg' src={careimg}/>
        <div className='careapp'>Careapp</div>
        <div className='linee'></div>
        </div>

        <div className='section2'>
          <div className='home'>Home</div>
          <div className='services'>Services</div>
          <div className='payment'>Payment</div>
        </div>

        <div className='section3'>
        <button className='header-signup-btn'><p className='signup'>Sign-Up</p></button>
        <button className='login-btn'><p className='login'>Log-In</p></button>
        </div>

    </div>

    <div className='hrhead'>
    <hr className='hr'/>
    </div>

    </div>
  )
}

export default header;