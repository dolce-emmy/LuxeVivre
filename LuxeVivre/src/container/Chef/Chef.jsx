import React from 'react';
import {SubHeading} from '../../components';
import {images} from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>

          <div className='app__chef-content'>
            <div className='app__chef-content_quote'>

              <img src={images.quote} alt="quote" />
              <p className='p__opensans'>At LuxeVivre, I pour my heart and soul into every dish, transforming fresh ingredients into unforgettable culinary experiences.</p>

            </div>
            <p className='p__opensans'>With each dish, we invite you to savor a symphony of flavors, crafted with passion and precision. Join us in indulging your senses in the world of LuxeVivre.</p>
          </div>

          <div className='app__chef-sign'>
            <p>Kevin Luo</p>
            <p className='p__opensans'>Chef and CoFounder</p>
            <img src={images.sign} alt="sign" />    
          </div>
    
    </div>
  </div>
);

export default Chef;
