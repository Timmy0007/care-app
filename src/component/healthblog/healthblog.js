import React from 'react'
import heart from '../../assets/heart.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Caroprod from '../caroprod';
import { CaroprodData, responsive } from "../CaroprodData";
import "./healthblog.css"

const healthblog = () => {

    const product = CaroprodData.map((item) => (
        <Caroprod
          name={item.name}
          url={item.productimage}
          description={item.description}
          description2={item.description2}
        />
      ));

  return (
    <div className='health'>
        <div className='health1'>
            <img className='heartimg' src={heart}/>
            <div className='healthdiv'>
            <div className='health2'>Health Blog</div>
            <div className='health3'>We Give You Insight On What Has Being , Is Existing In The Health World</div>
            </div>
        </div>


        <div className='caro'>
      <Carousel responsive={responsive}>
        {product}
      </Carousel>
      </div>


    </div>
  )
}

export default healthblog