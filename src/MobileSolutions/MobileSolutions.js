import React from 'react';
import { Link } from 'react-router-dom';
import './MobileSolutions.css';

class MobileSolutions extends React.Component {
  render() {
    return (
      <div>
        <div className='mobile-solutions__link'>
          <Link
            className='mobile-nav-link'
            to={'/mobilenav'}
          >
            GO BACK
          </Link>
        </div>
        <div className='mobile-solutions__link'>
          SOLUTIONS BY INDUSTRY
        </div>
        <div className='mobile-solutions__link'>
          SOLUTIONS BY PROCESS
        </div>
        <div className='mobile-solutions__link'>
          SOFTWARE SOLUTIONS
        </div>
        <div className='mobile-solutions__link'>
          SERVICES
        </div>
      </div>
    )
  }
}

export default MobileSolutions;