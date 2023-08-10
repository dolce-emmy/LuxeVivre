import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img className='app__aboutus-logo' src={images.L} alt="" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
      <h1 className='headtext__cormorant'>About Us</h1>
      <img src={images.spoon} alt="about_spoon" className='spoon__img' />
      <p className='p__opensans'>At Luxevivre, our passion lies in redefining dining through innovative dishes, impeccable service, and an elegant ambiance. With a rich blend of culinary artistry and a commitment to perfection, we invite you to join us on a journey that celebrates the art of gastronomy.</p>
      <button type='button' className='custom__button' >Know More</button>
      
      </div>
      
      
      <div className='app__aboutus-content_knife flex__center'>
        <img src= {images.knife} alt='about_knife' />
      
      </div>

      <div className='app__aboutus-content_history'>
      <h1 className='headtext__cormorant'>Our History</h1>
      <img src={images.spoon} alt="about_spoon" className='spoon__img' />
      <p className='p__opensans'>At Luxevivre, our passion lies in redefining dining through innovative dishes, impeccable service, and an elegant ambiance. With a rich blend of culinary artistry and a commitment to perfection, we invite you to join us on a journey that celebrates the art of gastronomy.</p>
      <button type='button' className='custom__button' >Know More</button>
      
      </div>
      
    </div>

     
      
  </div>
  
);

export default AboutUs;
