import React from 'react';
import './Solutions.css';

class Solutions extends React.Component {
  render() {
    let dropDownClass;
    this.props.show ? dropDownClass = 'drop-down open' : dropDownClass = 'drop-down'
    return (
      <ul className={dropDownClass}>
        <li className='solutions__links'>Solutions By Industry</li>
        <li className='solutions__links'>Solutions By Process</li>
        <li className='solutions__links'>Software Solutions</li>
        <li className='solutions__links'>Services</li>
      </ul>
    )
  }
}

export default Solutions;