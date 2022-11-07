import React from 'react'
import './nav.css'
import IMG from '../../assets/logo.png'

const Nav = () => {
  return (
    <>
      <div className="nav_links">
      <div className="logo">
         <img src ={IMG} alt="Personal Logo"/>
         </div>
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contacts</a></li>
            <li><a href="#">Resume</a></li>
        </ul>
    </div>
    </>
  )
}

export default Nav