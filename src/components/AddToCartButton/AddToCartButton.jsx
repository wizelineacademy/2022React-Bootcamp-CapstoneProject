import React from 'react';
import { AddToCart } from './AddToCartButton.styles';

export const AddToCartButton = ({smaller, handleClick}) => {
  
  return (
    <AddToCart smaller={smaller} onClick={handleClick}>ADD TO CART</AddToCart>
  );
}

