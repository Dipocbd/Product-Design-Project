import React from 'react'
import IMG from '../../assets/logo.png'
import {FaBehance, FaInstagram, FaLinkedin, FaTwitterSquare} from 'react-icons/fa';
import './footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer_container'>
     <div className='footer_logo'>
        <img src ={IMG} alt="icon">
         </img>
         </div>
        <div className='footer_icons'>
        <FaInstagram className='icons_instagram'/>
         <FaLinkedin className='icons_linkedin' />
         <FaTwitterSquare className='icons_twitter'/>
         <FaBehance className='icons_behance'/>
        </div>

       </div>
       </>
  )
}

export default Footer

