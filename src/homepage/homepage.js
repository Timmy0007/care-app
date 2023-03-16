import React from 'react'
import "./homepage.css"
import Header from '../Heading/header'
import Herosection from '../component/herosection/herosection'
import Section3 from '../component/boxshadowsection/boxsection'
import Insurance from '../component/insurance/insurance'
import Wondering from '../component/wondering/wondering'
import Doctorsit from '../component/doctorsit/doctorsit'
const homepage = () => {
  return (
    <div>
   <Header/>
   <Herosection/>
   <Section3/>
   <Insurance/>
   <Wondering/>
   <Doctorsit/>
   </div>
  )
}

export default homepage;