import React from 'react';
import { Link } from 'react-router-dom';

class MobileSolutions extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to={'/mobilenav'}>
            GO BACK
          </Link>
        </div>
        <div>
          SOLUTIONS BY INDUSTRY
        </div>
        <div>
          SOLUTIONS BY PROCESS
        </div>
        <div>
          SOFTWARE SOLUTIONS
        </div>
        <div>
          SERVICES
        </div>
      </div>
    )
  }
}

export default MobileSolutions;