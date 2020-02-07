import React from 'react';
import { Link } from 'react-router-dom';
import UpperNav from '../UpperNav/UpperNav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <header>
        <div className='mobile-header'>
          <div className='mobile__left-icon'>
            <Link to={'/mobilenav'}>
              <FontAwesomeIcon
                icon={'bars'}
                id='bars'
                size='lg'
              />
            </Link>
            <img src={require('../images/logo-large.png')} alt='logo' className='small-logo'/>
          </div>
          <FontAwesomeIcon
            icon={'search'}
            id='search'
            className='mobile__right-icon'
            size='lg'
          />
          <FontAwesomeIcon
            icon={'user'}
            id='user'
            className='mobile__right-icon'
            size='lg'
          />
            <FontAwesomeIcon
              icon={'shopping-cart'}
              id='shopping-cart-icon'
              className='mobile__right-icon'
              size='lg'
            />
        </div>
        <div>
          <UpperNav />
        </div>
        <nav className='main-nav'>
          <ul className='main-links'>
            <div>
              <img src={require('../images/logo-large.png')} alt='logo' className='large-logo'/>
            </div>
            <li className='main-nav__link'>
              <Link
                to={'/solutions'}
                className='solutions-link'
                onClick={this.props.toggle}
              >
                SOLUTIONS
              </Link>
            </li>
            <li className='main-nav__link'>PRODUCTS</li>
            <li className='main-nav__link'>AUTOMATION</li>
            <li className='main-nav__link'>EDUCATION</li>
            <li className='main-nav__link' id='last-link'>RESOURCES</li>
            <input type='text' id='search' placeholder='Search'/>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Nav;