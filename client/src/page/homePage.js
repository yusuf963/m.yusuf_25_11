import React from 'react';
import Directory from '../components/directory';
import './homePage.scss';

// HomePage component
const HomePage = () => (
  <div className='homepage'>
    <h3 className='brand-logoo'>
      InteliStyle
      <p className='subtitlee'>Lead tech-co in Fastion Industery</p>
    </h3>
    <Directory />
  </div>
);

export default HomePage;
