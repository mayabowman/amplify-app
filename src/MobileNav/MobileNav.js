import React from 'react';
import { Link } from 'react-router-dom';

class MobileNav extends React.Component {
  render() {
    return (
      <div>
        <div className='moble-nav'>
          <Link to={'/mobilesolutions'}>
            SOLUTIONS
          </Link>
        </div>
        <div>
          PRODUCTS
        </div>
        <div>
          AUTOMATION
        </div>
        <div>
          EDUCATION
        </div>
        <div>
          RESOURCES
        </div>
      </div>
    )
  }
}

export default MobileNav;