import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour ' />
      <h1 className='app__header-h1'>The Key to fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>indulge in culinary excellence at Luxevivre, where every dish is a masterpiece crafted by world-class chefs. Experience opulence and sophistication, creating unforgettable dining moments. Elevate your expectations and savor the finest gastronomy – a transcendental experience awaits.</p>   
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
