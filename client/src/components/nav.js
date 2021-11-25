import React from 'react';
import './nav.scss';

//navigation bar
const Nav = () => {
  return (
    <nav className='navbar fixed-top  navbar-expand-lg navbar  navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          Home
        </a>
        <ul className='list navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            <a className='nav-link active' aria-current='page' href='/garments'>
              Collections
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link'
              href='http://www.intelistyle.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              InteliStyle Official
            </a>
          </li>
        </ul>
        <ul className='sign-in navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            <a className='nav-link active' aria-current='page' href='/garments'>
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
