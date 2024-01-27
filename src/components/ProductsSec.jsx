import React, { useEffect, useState } from 'react'
import {products} from './Array'


const ProductSec = (props) => {
   
    const [cartItems,setCartItems]=useState([])

    useEffect(()=>{
        const data=localStorage.getItem('cartArr');
        if(data){
            const d=JSON.parse(data)
            setCartItems(d);
            props.setCount(d.length)
        }else{
            localStorage.setItem("cartArr",JSON.stringify(cartItems))
        }

    },[cartItems])

    console.log(cartItems)

    const addToCart=(item)=>{
        item.quantity=1;
        setCartItems([...cartItems,item])
        localStorage.setItem("cartArr",JSON.stringify([...cartItems,item]))
    }

    return (
        <>
        <div className="carousel w-full  flex flex-col mt-5">
            <h1 className='text-zinc-600 font-bold text-2xl ml-14 mt-5'>{props.heading}</h1>
            <div className='w-full mt-2 bg-gray-200  py-8 px-10 '>
                <div className='grid grid-cols-4 gap-5 '>
                     {products.map((item) => ( 
                        <div key={item.id} className='min-w-[250px] h-[280px] py-5 bg-white shadow-lg rounded-lg flex
                    flex-col justify-evenly items-center hover:scale-105 transition-transform cursor-pointer'>
                            <img className='w-[150px] h-[150px] ' src={item.imgUrl} alt="" />
                            <h2 className='text-lg text-black capitalize '>{item.name}</h2>
                            <p className='text-sm text-gray-900 capitalize '>{item.price}</p>
                         <button onClick={()=>addToCart(item)} className='px-5 py-2 bg-blue-400 rounded-lg text-white font-semibold'>Add to Cart</button>
                         
                        </div>
                     ))} 
                </div>
            </div>
            </div>

        </>
    )
}

export default ProductSec