import React from "react";
import "./Card.css";
const Card = ({ name, image, price, category, isProduct }) => {
  return (
    <div className='content-card'>
      <img src={image} alt='' />
      <h6>{name}</h6>
      {isProduct && (
        <>
          <h5>{category}</h5>
          <h6>${price}</h6>
        </>
      )}
    </div>
  );
};

export default Card;
