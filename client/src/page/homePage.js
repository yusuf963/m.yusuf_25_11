import React from 'react';
import Directory from '../components/directory';
import './homePage.scss';

// HomePage component
const HomePage = () => (
  <div className='homepage'>
    <h3 className='home-brand-logo'>
      InteliStyle
      <p className='home-subtitle'>Lead tech-co in Fashion Industery</p>
    </h3>
    <Directory />
  </div>
);

export default HomePage;
