import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './MobileSolutions.css';

class MobileSolutions extends React.Component {
  render() {
    return (
      <div>
        <div className='mobile-solutions__link'>
          <FontAwesomeIcon
            icon={'chevron-left'}
            className='chevron-left'
            size='sm'
          />
          {' '}
          <Link
            className='mobile-nav-link'
            to={'/mobilenav'}
          >
            GO BACK
          </Link>
        </div>
        <div className='mobile-solutions__link'>
          SOLUTIONS BY INDUSTRY
          <FontAwesomeIcon
            icon={'chevron-right'}
            className='chevron-right'
            size='sm'
          />
        </div>
        <div className='mobile-solutions__link'>
          SOLUTIONS BY PROCESS
          <FontAwesomeIcon
            icon={'chevron-right'}
            className='chevron-right'
            size='sm'
          />
        </div>
        <div className='mobile-solutions__link'>
          SOFTWARE SOLUTIONS
          <FontAwesomeIcon
            icon={'chevron-right'}
            className='chevron-right'
            size='sm'
          />
        </div>
        <div className='mobile-solutions__link'>
          SERVICES
          <FontAwesomeIcon
            icon={'chevron-right'}
            className='chevron-right'
            size='sm'
          />
        </div>
      </div>
    )
  }
}

export default MobileSolutions;