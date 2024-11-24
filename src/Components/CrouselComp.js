import React from 'react'
import './CrouselComp.css';
import { Carousel } from 'react-bootstrap';

const CrouselComp = ({img}) => {
  return (
   <Carousel fade data-bs-theme="dark">
       {img.map((item,index)=><Carousel.Item interval={800} key={index}><img key={index} src={item} alt='crousel-img'/></Carousel.Item>)}
   </Carousel>
  )
}

export default CrouselComp
