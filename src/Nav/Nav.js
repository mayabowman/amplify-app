import React from 'react';
import { Link } from 'react-router-dom';
import UpperNav from '../UpperNav/UpperNav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Nav.css';

class Nav extends React.Component {
  render() {
    let linkClass;
    let headerClass;
    this.props.dropDownOpen ? linkClass = 'solutions-link open' : linkClass = 'solutions-link';
    this.props.isClicked ? headerClass = 'mobile-header hidden' : headerClass = 'mobile-header';
    return (
      <header>
        <div className={headerClass}>
          <Link
            to={'/mobilenav'}
            onClick={this.props.buttonClick}
            className='hamburger'
          >
            <FontAwesomeIcon
              icon={'bars'}
              id='bars'
              size='lg'
              className='bars'
            />
          </Link>
          <div className='mobile-header-child'>
            <img src={require('../images/logo-large.png')} alt='logo'/>
          </div>
          <FontAwesomeIcon
            icon={'search'}
            id='search'
            className='search'
            size='lg'
          />
          <FontAwesomeIcon
            icon={'user'}
            id='user'
            className='mobile-header-child'
            size='lg'
          />
          <FontAwesomeIcon
            icon={'shopping-cart'}
            id='shopping-cart-icon'
            className='shopping-cart'
            size='lg'
          />
          {'  '}
          3
        </div>
        <div>
          <UpperNav />
        </div>
        <nav className='main-nav'>
          <div>
            <img src={require('../images/logo-large.png')} alt='logo' className='large-logo'/>
          </div>
          <ul className='main-links'>
            <li className='main-nav__link'>
              <Link
                to={'/solutions'}
                className={linkClass}
                onClick={this.props.toggle}
              >
                Solutions
              </Link>
            </li>
            <li className='main-nav__link'>Products</li>
            <li className='main-nav__link'>Automation</li>
            <li className='main-nav__link'>Education</li>
            <li className='main-nav__link'>Resources</li>
            <li>
              <input type='text' id='search' placeholder='Search'/>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Nav;