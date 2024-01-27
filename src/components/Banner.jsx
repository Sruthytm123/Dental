import React from 'react'
import banner3 from '../assets/banner3.png'

import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return (
    <Carousel className='mt-1'>
      <img
        src={"https://dentalprod.com/cdn/shop/files/3M_DENTAL_PRODUCTS.png?v=1653837818"}
        alt="image 1"
        className="h-[350px] w-full object-cover"
      />
      <img
        src={"https://dentalprod.com/cdn/shop/files/shofu_banner.png?v=1653842186"}
        alt="image 2"
        className="h-[350px] w-full object-cover"
      />
      <img
        src={banner3}
        alt="image 3"
        className="h-[350px] w-full object-cover"
      />
    </Carousel>
  );
}
