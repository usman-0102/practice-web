import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
export default function Header() {
  const[toggle,setToggle]=useState(false);
  return (
    <div className='bg-[#0369a1] p-4 fixed drop-shadow-lg w-full z-10'>
      <div className="py-2 items-center max-w-[1240px] flex justify-between mx-auto">
        <div className="text-3xl font-bold text-white" >
          DevDen
        </div>
        {
          toggle ?
          <AiOutlineClose onClick={()=>{setToggle(!toggle)}} className='text-white text-3xl md:hidden block'/> 
          :
        <AiOutlineMenu onClick={()=>{setToggle(!toggle)}} className='text-white text-3xl md:hidden block'/>
         }
        <ul className='hidden md:flex text-white gap-10'>
          <li>
            Home
          </li>
          <li>
            Company
          </li>
          <li>
            Resources
          </li>
          <li>
            About
          </li>
          <li>
            Contact
            </li>
        </ul>
        {/*Responsive */}
        <ul className={ `duration-700 md:hidden text-white h-screen w-full fixed bg-[#0c4a6e] top-20 ${toggle ? "left-[0]": "left-[-100%]"}`}>
          <li className='p-5'>
            Home
          </li>
          <li className='p-5'>
            Company
          </li>
          <li className='p-5'>
            Resources
          </li>
          <li className='p-5'>
            About
          </li>
          <li className='p-5'>
            Contact
            </li>
        </ul>
      </div>
    </div>
  )
}
