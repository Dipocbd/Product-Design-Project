import React from 'react'
import './about.css'
import IMG from '../../assets/aboutimage.png'

const About = () => {
  return (
    <>
    <div className='about_container'>
        <div className='one'>
        <div className='about_img'>
        <img src ={IMG} alt="About Image"/>
        <h4>Google Certified</h4>
        </div>
       
        </div>
       
        <div className='about_content'>
         <h1 className='gradient_text'>ABOUT ME</h1>
         <h3>A marketing and product design expert with a solid history of achievements in leading work-streams within cross-functional teams 
            and driving projects proven to develop brands, products and excellent bottom-line results. 
            A strategic thinker and detailed executioner with extensive experience in research,
             user satisfaction analysis, design and business development.</h3>
        </div>
    </div>
    </>
  )
}

export default About