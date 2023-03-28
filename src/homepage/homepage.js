import React from 'react'
import "./homepage.css"
import Header from '../Heading/header'
import Herosection from '../component/herosection/herosection'
import Section3 from '../component/boxshadowsection/boxsection'
import Insurance from '../component/insurance/insurance'
import Wondering from '../component/wondering/wondering'
import Doctorsit from '../component/doctorsit/doctorsit'
import Healthblog from '../component/healthblog/healthblog'
import Alldoctor from '../component/alldoctor/alldoctor'
import Faq from '../component/faq/faq'
import Steth from '../component/steth/steth'
import Footer from '../component/footer/footer'
const homepage = () => {
  return (
    <div>
   <Header/>
   <Herosection/>
   <Section3/>
   <Insurance/>
   <Wondering/>
   <Doctorsit/>
   <Alldoctor/>
   <Healthblog/>
   <Faq/>
   <Steth/>
   <Footer/>
   </div>
  )
}

export default homepage;