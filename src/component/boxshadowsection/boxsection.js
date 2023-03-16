import React from 'react'
import "./boxsection.css"

const boxsection = () => {
  return (
    <div className='boxsection'>

     <div className='box1'>
    <div className='plus1'><b>200+</b></div>
    <div className='pat'>Onboarded Patients</div>
     </div>

     <div className='box2'> 
     <div className='plus2'><b>50+</b></div>
     <div className='regd'>Registered Doctors</div>
     </div>

     <div className='box3'>
     <div className='plus3'><b>180+</b></div>
     <div className='happy'>Happy And Satisfied Patients</div>
     </div>
    </div>
  )
}

export default boxsection;