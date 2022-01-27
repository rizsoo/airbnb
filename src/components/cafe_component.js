import React from 'react';
import './cafe_component.css';

const cafe_component = ( { title, desc, image } ) => {
  return (
  <div className='cafe_component'>
      <div>
        <h3><b>{title}</b></h3>
        <p>{desc}</p>
      </div>
      <img src={image} alt=''/>
  </div>
  )};

export default cafe_component;
