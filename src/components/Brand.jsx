import React from 'react'
import { brands } from './Array'


function Brand() {
  
  
  return (

    <>  
            <div >
            <h1 className='text-zinc-600 font-bold text-2xl ml-14 mt-5  text-center'>Brands</h1>
            <div className='w-full h-[150px] pt-12  bg-slate-600 mt-2   '>
                <div className='flex  w-full justify-evenly '>
                    {brands.map((item) => (
                        <div key={item.id} className='min-w-[150px] h-[80px] bg-white shadow-lg rounded-lg flex
                    flex-col justify-evenly items-center hover:scale-105 transition-transform cursor-pointer'>
                        <img src={item.imgUrl} alt=""  className='h-[70px] w-[140px]'/>    
                        </div>
                    ))}
                </div>
            </div>
            </div>
            
        </>
  )
}

export default Brand
