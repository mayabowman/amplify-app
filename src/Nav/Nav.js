import React from 'react';
import { Link } from 'react-router-dom';
import AltNav from '../AltNav/AltNav';
import MenuToggleButton from '../MenuToggleButton/MenuToggleButton';
import './Nav.css';

class Nav extends React.Component {
  render() {

    console.log('props', this.props)
    return (
      <header>
        <div className='navbar-toggle-button'>
          <Link to={'/mobilenav'}>
            <MenuToggleButton />
          </Link>
        </div>
        <div>
          <AltNav />
        </div>
        <nav className='main-nav'>
          <ul className='main-links'>
            <div>
              <img src={require('../images/logo-large.png')} alt='logo' className='large-logo'/>
            </div>
            <li>
              <Link
                to={'/solutions'}
                className='solutions-link'
                onClick={this.props.toggle}
              >
                SOLUTIONS
              </Link>
            </li>
            <li>PRODUCTS</li>
            <li>AUTOMATION</li>
            <li>EDUCATION</li>
            <li>RESOURCES</li>
            <input type='text' id='search' placeholder='Search'/>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Nav;