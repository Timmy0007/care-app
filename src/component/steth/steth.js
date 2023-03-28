import React from 'react'
import "./steth.css"
import Wechat from '../../assets/wechat.png'


const steth = () => {
  return (
    <div className='steth'>

    <div className='steth1'>
   <b> Every Patient Can Be Treated In The Comfort Of Their Own Home</b>
    </div>

    <div className='steth2'>
    We Provide Real Time Medical Consultation And Diagnosis, Allowing You To Use Your Insurance Policy To Get Medical Treatment Wherever You Want It.
    </div>

    <div className='steth3'>
    <button className='stethchat'>
          <img className='stethwechat' src={Wechat}/>
          <p className='stethchat2'>Chat With Doctor</p>
          </button>    
    </div>

    </div>
  )
}

export default steth