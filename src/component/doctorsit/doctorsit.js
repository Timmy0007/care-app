import React from 'react'
import "./doctorsit.css"
import doctorsitimg from '../../assets/doctorsit.png'
import strand from '../../assets/strand.png'

const doctorsit = () => {
  return (
    <div className='doctorsit'>
        <div className='doctorsit1'>
        <div className='yes'>Yes, We Had You In Mind And We Also Made Plans For You </div>
        <div className='ourd'>Our Doctors Are Also Ready To Chat With You , Because Careapp Priotise Good Health First</div>
        <div className='how'> 
        <p className='how2'>How It Works</p>
        </div>

        <div className='signupp'>
            <p className='signupp1'>1. Sign-Up</p>
        
        </div>

        <div className='signupp2'>Sign Up By Clicking On The Sign-Up Button  And Fill In All The Required Details , Required Of You To Fill</div>

        <div className='verif'>
            <p className='verif1'>2. Verification</p>
            </div>

        <div className='verif2'>You Verify And We Confirm You Are Not A Robot , Then You Can Get Set To Check-Out What Careapp Have  For You.</div>

        <div className='makepay'>
            <p className='makepay1'>3. Make Payment</p>
            </div>

        <div className='makepay2'>Make Payment Either Via Your Card, Or Ussd Code , Once Payment Is Confirmed , You Are Immediately Redirected To An Available Doctor.</div>

        <div className='cons'>
            <p className='cons1'>4. Consultation</p>
            </div>

        <div className='cons2'>You Are Redirected To A Doctor And Consultation Begins.</div>

        </div>

        <div className='doctorsit2'>
        <img className='strand' src={strand}/>
        <img className='doctorsitimg' src={doctorsitimg}/>
        </div>
    </div>
  )
}

export default doctorsit