import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className='w-full flex flex-col items-center'>
     
      <div className='w-full flex flex-col items-center gap-5 p-5'>
        <h1 className='text-black text-2xl font-bold  '>SIGN UP FOR OUR NEWSLETTER</h1>
        <p className='text-black'>Receive our latest updates about our products and promotions.</p>
        
        <form className='flex gap-3 w-full justify-center'>
        <input type="text" placeholder='enter your email address' className=' w-[40%] bg-transparent rounded-lg border-[2px] border-black/50 px-5 py-2' />
        <button type='submit' className='rounded-lg border-[2px] border-black/50 px-5 py-2 bg-black hover:bg-transparent hover:text-black text-white'>submit</button>
        </form>
     </div>

      <div className='flex justify-between px-10 items-center w-full h-10'>
        <p>copyright @sruthytm-2024</p>

        <div className='flex gap-4 items-center '>
        <FaFacebook />
        <FaPhone />
        <FaGithub />
        </div>

      </div>

    </div>
  )
}

export default Footer
