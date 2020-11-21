import React from 'react';
import { Link } from 'react-router-dom';

import './MenWomenFootwear.css';
const MGym = 'https://i.imgur.com/AsT4Rol.jpg';

const MenWomenFootwear = ({ title, image, pathTo }) => {
  return (
    <div className="menWomenFootwear">
      <span>{title}</span>
      <Link to={pathTo} style={{textDecoration: 'none'}} >
        <img className="shoesimage" src={image} alt="" />
        <div className="view">
          <span className="menWomenFootwear__view">Click here to View All</span>
        </div>
      </Link>
    </div>
  );
}

export default MenWomenFootwear;