import React from 'react'
import CV from '../assets/cv.pdf'

const Resume = () => {
  return (
    <div className='cta'>
        <a href={CV} download> Download Resume</a>
    </div>
  )
}

export default Resume