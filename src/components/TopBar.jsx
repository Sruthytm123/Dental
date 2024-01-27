
import React from 'react'
import ToggleBar from './ToggleBar';

function TopBar() {
  return (
    <div className='w-[vw%] h-[100px] text-white bg-[rgb(39,46,59)]  relative cursor-pointer hover: mt-[110px]'>
     <ToggleBar />
      <ul className=' pt-4 flex  justify-center gap-5  '> 
        <li>Home</li>
        <li>Shop</li>
        <li>Pharmacy Store</li>
        <li>My Account</li>
        <li>Track Order</li>
        <li>Contact Us</li>
        </ul>
        <select className=' ml-[30.5%] mt-6 w-60 bg-transparent text-white  ' >
            <option className='bg-[rgb(39,46,59)]'> India </option>
            <option className='bg-[rgb(39,46,59)]'> Germany </option>
            <option className='bg-[rgb(39,46,59)]'> Australia </option>
            <option className='bg-[rgb(39,46,59)]'> Bahrain </option>
            <option className='bg-[rgb(39,46,59)]'> Iceland</option>
            <option className='bg-[rgb(39,46,59)]'> Turkey </option>
        </select>
     
    </div>
  )
}

export default TopBar
