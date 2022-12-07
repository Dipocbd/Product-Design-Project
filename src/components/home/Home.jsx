import React from 'react'
 import './home.css'
import IMG from '../../assets/image.png'
import CV from '../../assets/cv.pdf'


const Home = () => {
  return (
    <section id='home'>
    <div className='home_container'>
        <div className='home__left'>
        <h2>Hello there</h2>
        <h3 className='work'>I’m <span>Femi Kehinde</span> a top-performing marketing and
           product design expert based in Dubai.
           I am interested in
            building brands, society and designs.</h3>
            <div className='cta'>
            <a href={CV} download className='btn-gradient btn-gradient-green'> Download Resume</a>
            </div>
        </div>
        <div className='home_img'>
            <img src ={IMG} alt="Home"/>
          </div>
    </div>
    
    </section>
  )
}

export default Home