import React from 'react'
import { useState } from 'react'
import faqimg from '../../assets/faqimg.png'
import { faqdata } from './faqdata'
import "./faq.css"
import arrowdown from '../../assets/arrowdown.png'
import arrowup from '../../assets/arrowup.png'

const Faq = () => {

  const [selected, setSelected]= useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className='faq'>

    <div className='faq1'>
    <div className='faqq'>
        <div className='faqheading'>Frequently Asked Question</div>
        <hr id='faqline'/>
        <div className='faqsub'>Basically If You Use Careapp And Have An Health Insurance Policy You Can Get On Line Check Up And Get To A Doctor Fast.</div>
    </div>
    <img className='faqimg' src={faqimg}/>
    </div>


    <div className='faq2'>
        {faqdata.map((item, i) =>(
    <div className='qa'>
    <div className='question'>
     <b className='iquest'>{item.Question}</b>
     <div className='arrowdown' onClick={() => toggle(i)}>
      { selected=== i? <img src={arrowdown}/> : <img src={arrowup}/> }
      </div>
    </div>
    
     <hr id='queshr'/>

    <div id='answerr' className={ selected=== i? 'answers' : 'answer' }>
      <p className='answer1'>{item.Answer}</p>
      <p className='answer2'>{item.Answer2}</p>
    </div>
    </div>    
        ))}
    </div>
    </div>
  )
}

export default Faq