import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header({count}) {

  

  return (
    <div className=' w-full h-[110px]  text-white fixed top-0 left-0 z-20 font-semibold px-10 flex justify-between items-center bg-[rgb(96,170,234)] cursor-pointer hover:  '>
      <Link to={"/"}><img  className='h-[90px]'  src={logo}/></Link>
      <input type="text" value="" placeholder='i am searching for' className='w-[50%] h-[40px] pl-3 rounded '/>
      
    <FavoriteBorderIcon   sx={{width:40 , height:40}}/>
   <Link to = "/cart"><div className='relative'><ShoppingCartIcon sx={{width:40 , height:40}}/> <span className='rounded-full bg-black absolute -right-1 bottom-0 text-white px-2'>{count}</span></div></Link>
    <Link to = "/login " >
    <div className='flex items-center cursor-pointer'>
    <PersonOutlineOutlinedIcon  sx={{width:45 , height:45}}/>
    <div className='flex flex-col '>
        <p>Log in </p> <p>Register</p></div>
    </div>
    </Link>
    
      
    </div>
  )
}

export default Header
