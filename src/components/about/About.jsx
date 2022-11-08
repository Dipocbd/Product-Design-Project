import React from 'react'
import './about.css'
import IMG from '../../assets/aboutimage.png'
import IMG1 from '../../assets/socialicon1.png'
import IMG2 from '../../assets/socialicon2.png'
import IMG3 from '../../assets/socialicon3.png'
import IMG4 from '../../assets/socialicon4.png'
import IMG5 from '../../assets/socialicon5.png'

const About = () => {
  return (
    <section id='about'>
    <div className='about_container'>
        <div className='about__left'>
         <div className='about_img'>
            <img src ={IMG} alt="About"/>
           <div className='about_flex'>
           <img src={IMG1} alt="Google Icon"></img>
           <h4>Google Certified</h4>
           </div>
          </div>
       </div>
       
        <div className='about__right'>
         <h1 className='gradient_text'>ABOUT ME</h1>
         <h4>A marketing and product design expert with a solid history of achievements in leading work-streams
               within cross-functional teams 
             and driving projects proven to develop brands, products and excellent bottom-line results. 
             A strategic thinker and detailed executioner with extensive experience in research,
              user satisfaction analysis, design and business development.
            </h4>
            <div className='about_content'>
            <div className='about_details'>
                <h3 className="green">5+</h3>
                <h2>Years of 
                Experience
                </h2>
            </div>
            <div className='about_details'>
                <h3 className='green'>47</h3>
                <h2>Projects till date</h2>
            </div>
            </div>
            <div className='social_icon'>
                <div><img src={IMG2} alt="" /></div>
                <div><img src={IMG3} alt="" /></div>
                <div className='icon_large'><img src={IMG4} alt="" /></div>
                <div className='icon_large'><img src={IMG5} alt="" /></div>
            </div>
              
        </div>
    </div>
    </section>
  )
}

export default About