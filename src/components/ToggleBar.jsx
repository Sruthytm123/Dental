import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';

const ToggleBar = () => {
  const [isToggled, setToggled] = useState(false);

  const toggleHandler = () => {
    setToggled(!isToggled);
  };

  return (
    <div className='absolute bg-[rgb(39,46,59)] left-10 top-[40%] z-10 '>
      <button onClick={toggleHandler} >
      <IoMdMenu  className='w-8 h-8'/>
      </button>

      {isToggled && (
        <div className='  '>
         
        
            <ul className='m-3 flex flex-col justify-center gap-2'>
                <li>Account</li>
                <li>Orders</li>
                <Link to={"/settings"}><li>Settings</li></Link>
            </ul>
         
        </div>
      )}
    </div>
  );
};

export default ToggleBar;