import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import IMG from '../../assets/logo.png'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'

const Nav = () => {
  
   const [nav, setNav] = useState(false)

   const handleNav =()=>{
    setNav(!nav)
   }
  
  return (
    <>
      <nav className='flex justify-between items-center h-24 text-white'>
        <img className='beat' src ={IMG} alt="Personal Logo"/>
        <ul className= 'hidden md:flex'>
         <Link to= '/'><li className='p-4'>Home</li></Link> 
         <Link to= '/about'><li className='p-4'>About</li></Link>
         <Link to= '/services'><li className='p-4'>Services</li></Link>
         <Link to= '/projects'><li className='p-4'>Projects</li></Link>
         <Link to= '/contacts'><li className='p-4'>Contacts</li></Link>
         {/* <Link to= '/resume'><li className='p-4'>Resume</li></Link> */}
         </ul> 

         <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
         </div>

         <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' :'fixed left-[-100%]'}>
         <h1 className='m-4 w-200px h-200px hidden'><img src ={IMG} alt="Personal Logo" /></h1>

          <ul className='uppercase p-20'>
        <Link to= '/'><li className='p-4 border-b border-gray-600'>Home</li></Link> 
         <Link to= '/about'><li className='p-4 border-b border-gray-600'>About</li></Link>
         <Link to= '/services'><li className='p-4 border-b border-gray-600'>Services</li></Link>
         <Link to= '/projects'><li className='p-4 border-b border-gray-600'>Projects</li></Link>
         <Link to= '/contacts'><li className='p-4 border-b border-gray-600'>Contacts</li></Link>
         <Link to= '/resume'><li className='p-4 border-b border-gray-600'>Resume</li></Link>
          </ul>
         </div>

         {/* <button className='mobile-menu-icon' onClick={() =>setMobile(!Mobile)}>
          {Mobile ? <ImCross/> : <FaBars/>}
          </button> */}
      </nav>
         </>

  )
}

export default Nav