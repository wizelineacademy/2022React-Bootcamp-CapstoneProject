import React from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../../images/shopping-cart.svg';
import { ButtonCart, CartWrapper, ItemCounter } from './ShoppingCart.styles';

export const  ShoppingCart = () => {
  return(
    <CartWrapper>
      <ButtonCart>
        <ShoppingCartIcon />
      </ButtonCart>
      <ItemCounter> 10 </ItemCounter>
    </CartWrapper>
  );
}