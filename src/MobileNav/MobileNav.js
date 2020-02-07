import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './MobileNav.css';

class MobileNav extends React.Component {
  render() {
    return (
      <div>
        <div className='menu-div'>
          Menu
          <Link
            to={'/solutions'}
            onClick={this.props.buttonClick}
          >
            <FontAwesomeIcon
              icon={'times'}
              className='times'
            />
          </Link>
        </div>
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
              {' '}
              <FontAwesomeIcon
                icon={'chevron-right'}
                size='sm'
              />
            </li>
            <li className='lower-nav__link'>
              <FontAwesomeIcon
                icon={'map-marker-alt'}
                className='map-marker-alt'
              />
              Where to Buy/Rent
            </li>
            <div className='lower-nav__link'>
              <img src={require('../images/safety-icon-light.png')} alt='safety-icon' className='safety-icon'/>
              Safety
            </div>
            <div className='lower-nav__link'>
              <img src={require('../images/en-flag-light.png')} alt='en-flag' className='en-flag'/>
              EN
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default MobileNav;