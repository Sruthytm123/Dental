import React, { useState } from 'react'
import TopBar from '../components/Topbar'
import { CarouselDefault } from '../components/Banner'
import ProductSec from '../components/ProductsSec'
import Brand from '../components/Brand';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
