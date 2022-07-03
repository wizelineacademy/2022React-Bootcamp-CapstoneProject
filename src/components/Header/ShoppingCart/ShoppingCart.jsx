import React from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../../images/shopping-cart.svg';
import { ROUTES } from '../../../utils/constants';
import { ButtonCart, CartWrapper, ItemCounter } from './ShoppingCart.styles';

export const  ShoppingCartButton = () => {
  return(
    <CartWrapper>
      <ButtonCart to={ROUTES.shoppingCart}>
        <ShoppingCartIcon />
      </ButtonCart>
      <ItemCounter> 10 </ItemCounter>
    </CartWrapper>
  );
}