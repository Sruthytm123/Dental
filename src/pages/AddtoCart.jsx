import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const AddtoCart = () => {

  const [cartItems, setCartItems] = useState([])

  useEffect(()=>{
    const d=localStorage.getItem("cartArr")
    const data=JSON.parse(d)
    setCartItems(data)
  },[])

  const increase = (id) => {
    const newData = cartItems.map((prod) => {
      if (prod.id === id) {
        prod.quantity = prod.quantity + 1;
      }
      return prod;
    })
    setCartItems(newData);
  }

  const decrease = (id) => {
    const newData = cartItems.map((prod) => {
      if (prod.id === id) {
        prod.quantity = prod.quantity - 1;
      }
      return prod;
    })
    setCartItems(newData);
  }

  let total
  if(cartItems.length!==0){
    total=cartItems.reduce((acc,item)=>{
      return acc + (item.price*item.quantity)
    },0)
  }

  console.log(cartItems)

  return (
    <>
    <Header/>
    <div className=' mt-[110px] flex flex-col gap-2 items-center justify-center'>

      {cartItems.map((product) => (

        product.quantity > 0 && (<div key={product.id} className='bg-gray-200 flex justify-evenly items-center h-[150px] w-full'>
          <img className='w-[100px] h-[100px] object-contain ' src={product.imgUrl} alt="" />
          <h1 className='text-gray-800 text-xl'>{product.item}</h1>
          <div className='flex items-center justify-between w-24'>
            <button onClick={() => decrease(product.id)} className='bg-emerald-500 w-5 h-5 rounded-lg text-black flex justify-center items-center'>-</button>
            <input value={product.quantity} className='w-10 pl-[12px] text-black bg-transparent border-2 border-gray-900 rounded-lg' contentEditable={false} type="text" />
            <button onClick={() => increase(product.id)} className='bg-emerald-500 w-5 h-5 rounded-lg text-black flex justify-center items-center' >+</button>
          </div>
          <h2 className='text-xl font-bold text-black'>{product.price}</h2>
        </div>)
      ))}
      {cartItems.length===0&&(
          <div className='flex justify-center items-center h-[500px]'>
            <h1 className='font-extrabold text-3xl'> sorry your cart is empty!</h1>
          </div>
      )}
        <div className='flex flex-col gap-5 mt-8'>
        <h1 className='text-xl text-black'>total: {total} </h1>
        
       
        <Link to={'/proceed-to-payment'} ><button className='rounded-md px-5 py-2 text-bold text-black bg-blue-400 border-2 '>Check out</button></Link>
      

      </div>
    </div>
    </>
  )
}

export default AddtoCart