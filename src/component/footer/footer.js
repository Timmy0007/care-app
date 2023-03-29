import React from 'react'
import careimg from '../../assets/careimg.png'
import buttonimg from '../../assets/buttonimg.png'
import "./footer.css"

const footer = () => {
  return (
    <div className='footer'>

    <div className='footer1'>
    <img className='careimg2' src={careimg}/>
        <div className='careapp'>Careapp</div>
    </div>

    <div className='footer2'>
    <div className='foooterabout'>About</div>
    <div className='footerdoc'>Doctors</div>
    </div>

    <div className='footer3'>
    <div className='footerhealth'>Health Blog</div>
    <div className='footerfaq'>Faq</div>
    </div>

    <div className='footer4'>
    <div className='footerjob'>Job</div>
    <div className='footertc'>T&C</div>
    </div>

    <div className='footer5'>
    <div className='footernews'><b>NEWSLETTER</b></div>
    <div className='footersub'>Subscribe To Newsletter To Get Health Stories And Health Related News</div>
    <div className='footerinput'>
    <input className='inp' placeholder='Enter Your email'/>
    <img className='buttonimg2' src={buttonimg}/>
    </div>
    </div>


    </div>
  )
}

export default footer