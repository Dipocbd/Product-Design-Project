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
        <a href="https://instagram.com/fxmi_ux?igshid=YmMyMTA2M2Y="><FaInstagram className='icons_instagram'/></a>
        <a href="https://www.linkedin.com/in/femi-kehinde-msc-67334b111"><FaLinkedin className='icons_linkedin'/></a>
        <a href="https://twitter.com/f3mi_?s=11&t=RyBOcJAKK3OkYfGHKjKldw"><FaTwitterSquare className='icons_twitter'/></a>
        <a href='https:www.behance.net/F3MI?fbclid=PAAaYdUA3w3QTocxzefcXRxuKD1AlwN5xMhBn9gOOjhnZAgTMNf72swNtgwfQ'><FaBehance className='icons_behance'/></a>
        </div>

       </div>
       </>
  )
}

export default Footer

