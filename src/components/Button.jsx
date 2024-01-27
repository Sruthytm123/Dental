import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-emerald-500 py-2 px-4 rounded-lg text-white font-bold hover:bg-emerald-700 cursor-pointer' >
        {props.btnType}  
    </button>
  )
}

export default Button