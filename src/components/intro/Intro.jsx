import React from 'react'
import './intro.css'
import IMG from '../../assets/image.png'

const Intro = () => {
  return (
    <>
    <div className='intro_container'>
        <div className='intro__left'>
        <h2>Hello there</h2>
        <h3 className='work'>I’m <span>Femi Kehinde</span> a top-performing marketing and
           product design expert based in Dubai.
           I am interested in
            building brands, society and designs.</h3>
            <div className='cta'>
                <a href = "#about" className="btn-gradient btn-gradient-green">Learn More About Me</a>
            </div>
        </div>
        <div className='intro_img'>
            <img src ={IMG} alt="Intro Image"/>
          </div>
    </div>
    
    </>
  )
}

export default Intro