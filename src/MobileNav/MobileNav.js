import React from 'react';
import { Link } from 'react-router-dom';

class MobileNav extends React.Component {
  render() {
    return (
    <div className='moble-nav'>
      <Link to={'/solutions'}>
        SOLUTIONS
      </Link>
    </div>
    )
  }
}

export default MobileNav;