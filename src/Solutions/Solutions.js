import React from 'react';
import './Solutions.css';

class Solutions extends React.Component {
  render() {
    let dropDownClass;
    this.props.show ? dropDownClass = 'drop-down open' : dropDownClass = 'drop-down'
    return (
      <ul className={dropDownClass}>
        <li>Solutions By Industry</li>
        <li>Solutions By Process</li>
        <li>Software Solutions</li>
        <li>Services</li>
      </ul>
    )
  }
}

export default Solutions;