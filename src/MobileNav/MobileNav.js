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
            Solutions
          </Link>
          <FontAwesomeIcon
            icon={'chevron-right'}
            className='chevron-right'
            size='sm'
          />
        </div>
        <div className='mobile-nav__link'>
          Products
          <FontAwesomeIcon
            icon={'chevron-right'}
            className='chevron-right'
            size='sm'
          />
        </div>
        <div className='mobile-nav__link'>
          Automation
          <FontAwesomeIcon
            icon={'chevron-right'}
            className='chevron-right'
            size='sm'
          />
        </div>
        <div className='mobile-nav__link'>
          Education
          <FontAwesomeIcon
            icon={'chevron-right'}
            className='chevron-right'
            size='sm'
          />
        </div>
        <div className='mobile-nav__link'>
          Resources
          <FontAwesomeIcon
            icon={'chevron-right'}
            className='chevron-right'
            size='sm'
          />
        </div>
        <div className='lower-nav'>
          <div className='lower-nav-ul'>
            <div className='lower-nav__link'>
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
            </div>
            <div className='lower-nav__link'>
              <FontAwesomeIcon
                icon={'map-marker-alt'}
                className='map-marker-alt'
              />
              Where to Buy/Rent
            </div>
            <div className='lower-nav__link'>
              <img src={require('../images/safety-icon-light.png')} alt='safety-icon' className='safety-icon'/>
              Safety
            </div>
            <div className='lower-nav__link'>
              <img src={require('../images/en-flag-light.png')} alt='en-flag' className='en-flag'/>
              EN
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MobileNav;