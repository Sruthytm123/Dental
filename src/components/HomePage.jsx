import React, { useState } from 'react'
import TopBar from './Topbar'
import { CarouselDefault } from './Banner'
import ProductSec from './ProductsSec'
import Brand from './Brand';
import Footer from './Footer';
import Header from './Header';
import ToggleBar from './ToggleBar';

function HomePage() {

  const [count,setCount]=useState(0)
  
  return (
    <>
      <Header count={count}/>
      <TopBar />
      <CarouselDefault />
      <Brand />
      <ProductSec setCount={setCount} heading={"Surgicals  "} />
      <ProductSec setCount={setCount} heading={"Medicals"} />
      <Footer />

    </>
  )
}

export default HomePage
