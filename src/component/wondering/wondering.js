import React from 'react'
import "./wondering.css"
import drug from '../../assets/drug.png'
import person from '../../assets/person.png'

const wondering = () => {
  return (
    <div className='wondering'>
        <div className='drug'>
            <img className='drugg' src={drug}/>
        </div>
        

        <div className='wonperson'>
            <div className='person'>
                <img className='personimg' src={person}/>
            </div>
            <div className='wondering1'>Wondering, If You Aren't On Any Health Insurance Plan</div>
            <div className='wondering2'>You Must Have Been Thinking , What  About If I Am Not Registered On Any Health Insurance Plan, Can't I  Have A Chat With The Doctor? </div>
        </div>


    </div>
  )
}

export default wondering