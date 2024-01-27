import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Settings = () => {
  return (
    <div className='w-full min-h-screen flex flex-col gap-5 pt-52 justify-center items-center bg-blue-100'>
        <Header/>
        
        <h1 className='font-extrabold text-3xl text-black/75 '>Hey Sruthy, welcome to your account</h1>
        <p className='text-xl text-black/75 font-light'>Your dashboard tools</p>
    <div className='grid grid-cols-3 gap-10 grid-rows-2 mb-20'>
      <div className='w-[300px] h-[80px] shadow-xl rounded-lg  border-2 border-black/25 hover:scale-110 transition-transform ease-in-out duration-300'>
        <img src ={"https://www.dentalworldofficial.com/wp-content/uploads/2022/01/Dashboard-4-min.png"}/>
      </div>

      <div className=' w-[300px] h-[80px] shadow-xl rounded-lg border-2 border-black/25 hover:scale-110 transition-transform ease-in-out duration-300'>
        <img  src ={"https://www.dentalworldofficial.com/wp-content/uploads/2022/01/Dashboard-3-min.png"}/>
      </div>

      <div className='w-[300px] h-[80px] shadow-xl rounded-lg border-2 border-black/25 hover:scale-110 transition-transform ease-in-out duration-300'>
       <img src ={"https://www.dentalworldofficial.com/wp-content/uploads/2022/01/Dashboard-7-min.png"}/>
      </div>

      <div className='w-[300px] h-[80px] shadow-xl rounded-lg border-2 border-black/25 hover:scale-110 transition-transform ease-in-out duration-300'>
        <img src={"https://www.dentalworldofficial.com/wp-content/uploads/2022/01/Dashboard-8-min.png"} alt="" />
      </div>

      <div className='w-[300px] h-[80px] shadow-xl rounded-lg border-2 border-black/25 hover:scale-110 transition-transform ease-in-out duration-300'>
       <img src="https://www.dentalworldofficial.com/wp-content/uploads/2022/01/Dashboard-9-min.png" alt="" />
      </div>

      <div className='w-[300px] h-[80px] shadow-xl rounded-lg border-2 border-black/25 hover:scale-110 transition-transform ease-in-out duration-300'>
        <img src="https://www.dentalworldofficial.com/wp-content/uploads/2022/01/Dashboard-6-min.png" alt="" />
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Settings
