import React from 'react';
import { Link } from 'react-router-dom';
import './MobileNav.css';

class MobileNav extends React.Component {
  render() {
    return (
      <div>
        <div className='mobile-nav__link'>
          <Link
            className='mobile-nav'
            to={'/mobilesolutions'}
          >
            SOLUTIONS
          </Link>
        </div>
        <div className='mobile-nav__link'>
          PRODUCTS
        </div>
        <div className='mobile-nav__link'>
          AUTOMATION
        </div>
        <div className='mobile-nav__link'>
          EDUCATION
        </div>
        <div className='mobile-nav__link'>
          RESOURCES
        </div>
      </div>
    )
  }
}

export default MobileNav;