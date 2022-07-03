import React from 'react';
import { AddToCart } from './AddToCartButton.styles';

export const AddToCartButton = ({smaller}) => {
  console.log(smaller);
  return (
    <AddToCart smaller={smaller}>ADD TO CART</AddToCart>
  );
}

