import React from 'react';
import './UpperNav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UpperNav extends React.Component {
  render() {
    return (
      <div>
        <ul className='top-links'>
          <div>
            <img src={require('../images/en-flag.png')} alt='en-flag' className='en-flag'/>
          </div>
          <li className='leftnav'>EN</li>
          <div>
            <img src={require('../images/safety-icon.png')} alt='safety-icon' className='safety-icon'/>
          </div>
          <li className='rightnav'>Safety</li>
          <FontAwesomeIcon
            icon={'question-circle'}
            className='question-circle'
          />
          <li className='rightnav'>Help</li>
          <FontAwesomeIcon
            icon={'map-marker-alt'}
            className='map-marker-alt'
          />
          <li className='rightnav'>Where to Buy/Rent</li>
          <FontAwesomeIcon
            icon={'user'}
            className='user'
          />
          <li className='rightnav'>Sign In</li>
          <li className='shopping-cart-li'>
            <FontAwesomeIcon
              icon={'shopping-cart'}
              className='shopping-cart-icon'
            />
            {' '}
            3
          </li>
        </ul>
      </div>
    )
  }
}

export default UpperNav;