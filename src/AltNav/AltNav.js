import React from 'react';
import './AltNav.css';
// import { Link } from 'react-router-dom';

class AltNav extends React.Component {
  render() {
    return (
      <div>
        <ul className='top-links'>
          <li className='leftnav'>EN</li>
          <li className='rightnav'>Safety</li>
          <li className='rightnav'>Help</li>
          <li className='rightnav'>Where to Buy/Rent</li>
          <li className='rightnav'>Sign In</li>
          <li className='rightnav'>Cart</li>
        </ul>
      </div>
    )
  }
}

export default AltNav;