import React from 'react';
import {SubHeading} from '../../components';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import {images} from '../../constants';

import './Gallery.css';

const Gallery = () => {

  
 return (
  <div className='app__gallery flex__center'>

    <div className='app__gallery-content'>
      <SubHeading title= "Instagram" />
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans' style={{color: '#AAA', marginTop: '2rem'}}>
      "Explore our Gallery—a visual journey through our culinary artistry and warm ambiance. Get a taste of what makes us special."
      </p>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

}

export default Gallery;
