import React from 'react'
import './projects.css'
// import Footer from '../components/Footer'
// import IMG from '../../assets/socialicon6.png'
import IMG1 from '../../assets/enyocard.png'
import IMG2 from '../../assets/menacard.png'
import IMG3 from '../../assets/marathon.png'
import IMG4 from '../../assets/queenete.png'
import IMG5 from '../../assets/kokoette.png'
import IMG6 from '../../assets/Vector5.png'
import IMG7 from '../../assets/Vector6.png'
import IMG8 from '../../assets/Homepage.png'
import IMG9 from '../../assets/icw.png'
import IMG10 from '../../assets/login.png'
import IMG11 from '../../assets/nft.png'

const Projects = () => {
  return (
    <section id= 'projects'>
        <div className='center'>
        <h2 className='gradient_text'>Designs</h2>
        {/* <img className='small' src = {IMG} alt=""></img>  */}
        
        <div className='project_container'>
         <div className='project_card'>
         <img src ={IMG1} alt=""></img>
         </div>
         <div className='project_card'>
         <img src ={IMG2} alt=""></img>
         </div>
        </div>
        <div className='project_container_two'>
        <div className='project_card_two'>
         <img src ={IMG3} alt=""></img>
         </div>
         <div className='project_card_two'>
         <img src ={IMG4} alt=""></img>
         </div>
         </div>
        </div>
        
        
        
        {/* Product Design */}

        <div className='product_container'>
          <h2 className='gradient_text'>PRODUCT DESIGN</h2>
          <div className='product_details'>
             <div className='product_left'>
                  <img src ={IMG5} alt=""></img>
                 <h1><b>Fashion e-commerce website</b></h1> 
                   <h4>Koko’ette Afrique is a Canada based fashion brand that designs afrocentric clothing
                 collections as it takes origin from Africa, precisely Nigeria.
                 The project  aims to create a user-friendly, minimal and engaging e-commerce website. 
                    </h4>
                <div className='arrow_flex'>
                    <h3 className='gradient_text'>View Case Study</h3>
                    <img src ={IMG6} alt=""></img>
                    <img src ={IMG7} alt=""></img>
                </div>
             </div>
                <div className='product_right'>
                <img src ={IMG8} alt=""></img>
                </div>
                  </div>
                  </div>



        <div className='product_container'>
          <h2 className='gradient_text'>PRODUCT DESIGN</h2>
          <div className='product_details'>
             <div className='product_left'>
                  <img src ={IMG9} alt=""></img>
                 <h1><b>iCW NFT Market place</b> </h1> 
                   <h4>ICW is a Russian crypto company based in Dubai and Serbia. 
                    The project was focused on creating an NFT market place for the brand as it
                     considered Opensea market place one of its biggest competitors. 
                     The project had a deep  research on user experience in order to create a better mobile application. 
                    </h4>
                <div className='arrow_flex'>
                    <h3 className='gradient_text'>View Case Study</h3>
                    <img src ={IMG6} alt=""></img>
                    <img src ={IMG7} alt=""></img>
                </div>
             </div>
                <div className='nft_right'>
               <div className='flex1'> 
                  <img src ={IMG10} alt=""></img>
                </div>

                <div className='flex2'>
                   <img src ={IMG11} alt=""></img>
                </div>

                </div>
                
           </div>
        </div>
        </section>
  )
}

export default Projects