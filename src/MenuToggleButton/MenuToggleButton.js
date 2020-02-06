import React from 'react';
import './MenuToggleButton.css'

function MenuToggleButton(props) {
  return (
    <button className='toggle-button' onClick={props.click}>
      <div className='toggle-button-line' />
      <div className='toggle-button-line'/>
      <div className='toggle-button-line'/>
    </button>
  )
}

export default MenuToggleButton;