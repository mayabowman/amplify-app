import React from 'react';
import './UpperNav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UpperNav extends React.Component {
  render() {
    return (
      <div className='upper-nav-container'>
        <div className='ul-container'>
          <ul className='top-links'>
            <li>
              <img src={require('../images/en-flag.png')} alt='en-flag' className='en-flag'/>
            </li>
            <li className='leftnav'>EN</li>
            <li>
              <img src={require('../images/safety-icon.png')} alt='safety-icon' className='safety-icon'/>
            </li>
            <li className='rightnav'>Safety</li>
            <li className='rightnav'>
              <FontAwesomeIcon
                icon={'question-circle'}
                className='question-circle'
              />Help
            </li>
            <li className='rightnav'>
              <FontAwesomeIcon
                icon={'map-marker-alt'}
                className='map-marker-alt'
              />Where to Buy/Rent
            </li>
            <li className='rightnav'>
              <FontAwesomeIcon
                icon={'user'}
                className='user'
              />Sign In
            </li>
          </ul>
        </div>
        <div className='cart-container'>
          <FontAwesomeIcon
            icon={'shopping-cart'}
            className='shopping-cart-icon'
          />
          {' '}
          3
        </div>
      </div>
    )
  }
}

export default UpperNav;