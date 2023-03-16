import React from 'react'
import "./herosection.css"
import herosectionimg from '../../assets/herosectionimg.png'
import Wechat from '../../assets/wechat.png'

const herosection = () => {
  return (
    <div className='herosection'>
        <div className='herosection1'>
        <div className='we-bring'>We Bring Your <b id='br'>Doctor</b> To Your Conveniences</div>
        <div className='careapp-works'>Careapp Works As A Perfect Partner For Customers Who Have Health Insurance And Are Seeking Medical Advice, But May Not Have Time To See A Doctor.</div>
        <div className='our-doctors'>Our Doctors Are Always Available At Any Seconds, Minute And Hour Through The Chat Feature</div>
        <button className='chat-btn'>
          <img className='wechat' src={Wechat}/>
          <p className='chat'>Chat With Doctor</p>
          </button>    
        </div>

        <div className='herosection2'>
            <img className='heroimg' src={herosectionimg}/>
        </div>

    </div>
  )
}

export default herosection;