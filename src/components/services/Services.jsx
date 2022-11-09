import React from 'react'
import './services.css'
import IMG from '../../assets/socialicon6.png'
import IMG1 from '../../assets/productdesign.png'
import IMG2 from '../../assets/digitalmarketing.png'
import IMG3 from '../../assets/research.png'
import IMG4 from '../../assets/strategy.png'

const Services = () => {
  return (
    <section id='service'>
        <h2 className='gradient_text'>Services i offer</h2>
         <img src = {IMG} alt=""></img> 
        <div className='service_container'>
         <div className='service_content'>
            <div className='service_card'>
                <img src ={IMG1} alt=""></img>
                <h3>Product Design</h3>
                <h4>As a product designer, I design and develop day-to-day digital products according to consumers requirements. 
                     I excel at identifying and using connections between user feedback, growth strategies,
                      and development needs to increase adoption, improve user experience and drive revenue growth.
                       </h4>
            </div>
            <div className='service_card'>
            <img src ={IMG2} alt=""></img>
                <h3>Digital Marketing</h3>
                <h4>I offer an array of digital marketing services to help create your brand identity on digital platforms. 
                    Skilled in conceptualizing digital campaigns, content management, reporting & analysis, Google ads and SEO development. 
                       </h4>
            </div>
            <div className='service_card'>
            <img src ={IMG3} alt=""></img>
                <h3>Research</h3>
                <h4>As a product designer, I design and develop day-to-day digital products according to consumers requirements. 
                 I excel at identifying and using connections between user feedback, growth strategies, 
                 and development needs to increase adoption, improve user expreience and drive revenue growth. 
                       </h4>
            </div>
            <div className='service_card'>
            <img src ={IMG4} alt=""></img>
                <h3>Brand Management & Strategy</h3>
                <h4>Highly qualified brand management and strategy expert with a demonstrated history of working in the marketing and advertising industry. 
                    I enjoy creative problem solving, 
                    I am also skilled at developing marketing strategies, campaign execution 
                    and managing internal and external resources to achieve business goals. 
                       </h4>
            </div>
        </div>
           <div className='personal_container'>
            <h2 className='gradient_text'>PERSONAL VALUES</h2>
            <img src = {IMG} alt=""></img>
            <h2 className='gradient_text'>From large enterprise to startups,
             here is what I promise:</h2> 
              <div className='personal_content'>
              <div className='personal_cards'>
                <h3>QUALITY</h3>
                <h4>This is what I love to do, 
                    so I am passionate when I work on projects 
                    and I ensure to put in my best and deliver the best quality possible.
                    </h4>
            </div>
            <div className='personal_cards'>
                <h3>HEALTHY WORK RELATIONSHIP</h3>
                <h4>I enjoy connecting with people and I do that effortlessly . 
                    I am here to make business process and operation seamless, 
                    understand people, solve problems and grow business revenue.
                    </h4>
            </div>
              </div>
           </div>
           <div className='brands'>
            <h2 className='gradient_text'>Selected Brands i have worked it</h2>
           </div>
    </div>
    </section>
  )
}

export default Services