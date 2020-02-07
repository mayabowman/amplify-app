import React from 'react';
import { Link } from 'react-router-dom';
import UpperNav from '../UpperNav/UpperNav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Nav.css';

class Nav extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     isClicked: false
  //   }
  // }

  // buttonClickHandler = () => {
  //   this.setState((prevState) => {
  //     return {isClicked: !prevState.isClicked}
  //   })
  // }

  render() {
    let linkClass;
    let headerClass;
    this.props.dropDownOpen ? linkClass = 'solutions-link open' : linkClass = 'solutions-link';
    this.props.isClicked ? headerClass = 'mobile-header hidden' : headerClass = 'mobile-header';
    console.log('headerClass', headerClass)
    return (
      <header>
        <div className={headerClass}>
          <Link
            to={'/mobilenav'}
            onClick={this.props.buttonClick}
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
                className={linkClass}
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