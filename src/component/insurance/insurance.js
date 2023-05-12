import React from 'react'
import "./insurance.css"
import Wechat from '../../assets/wechat.png'
import insuranceimg from '../../assets/insuranceimg.png'


const insurance = () => {
  return (
    <div className='insurance'>
        <div className='insurance1'>
        <div className='worry'>Worry Less!!! <br/><b className='healthworry'>Health Insurance</b> Plans Cover You</div>
        <div className='worry2'>Careapp Has A Health Insurance Feature, Which Requires You To Must Have Been On A Registered Health Insurance Plan And Wouldn't Require You To Pay For Consultancy Fee With The Doctor. <br/><p className='worry2a'>The Health Insurance Company Will Be Responsible For Costs Covered By The Health Insurance Policy.</p></div>
        <button className='chatd'>
          <img className='wechat2' src={Wechat}/>
          <p className='chat2'>Chat With Doctor</p>
          </button>    
        </div>


        <div className='insurance2'>
        <img className='insimg' src={insuranceimg}/>
        </div>

    </div>
  )
}

export default insurance