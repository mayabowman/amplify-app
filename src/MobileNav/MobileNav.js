import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <FontAwesomeIcon
            icon={'chevron-right'}
            className='chevron-right'
            size='sm'
          />
        </div>
        <div className='mobile-nav__link'>
          PRODUCTS
          <FontAwesomeIcon
            icon={'chevron-right'}
            className='chevron-right'
            size='sm'
          />
        </div>
        <div className='mobile-nav__link'>
          AUTOMATION
          <FontAwesomeIcon
            icon={'chevron-right'}
            className='chevron-right'
            size='sm'
          />
        </div>
        <div className='mobile-nav__link'>
          EDUCATION
          <FontAwesomeIcon
            icon={'chevron-right'}
            className='chevron-right'
            size='sm'
          />
        </div>
        <div className='mobile-nav__link'>
          RESOURCES
          <FontAwesomeIcon
            icon={'chevron-right'}
            className='chevron-right'
            size='sm'
          />
        </div>
        <div className='lower-nav'>
          <ul className='lower-nav-ul'>
            <li className='lower-nav__link'>
              <FontAwesomeIcon
                icon={'question-circle'}
                className='question-circle'
              />
              Help
            </li>
            <li className='lower-nav__link'>
              <FontAwesomeIcon
                icon={'map-marker-alt'}
                className='map-marker-alt'
              />
              Where to Buy/Rent
            </li>
            <div>
              <img src={require('../images/safety-icon-light.png')} alt='safety-icon' className='safety-icon'/>
            </div>
            <li className='lower-nav__link'>Safety</li>
            <div>
              <img src={require('../images/en-flag-light.png')} alt='en-flag' className='en-flag'/>
            </div>
            <li className='lower-nav__link'>EN</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MobileNav;