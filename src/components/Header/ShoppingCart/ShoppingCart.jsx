import React from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../../images/shopping-cart.svg';
import { ROUTES } from '../../../utils/constants';
import { ButtonCart, CartWrapper, ItemCounter } from './ShoppingCart.styles';

export const  ShoppingCartButton = ( { itemCounter } ) => {
  let total = 0;
  itemCounter.forEach(item => {
    const actualValue = Number(item.amount);
    return total += actualValue;
  });
  console.log('counter', total);
  
  return(
    <CartWrapper>
      <ButtonCart to={ROUTES.shoppingCart}>
        <ShoppingCartIcon />
      </ButtonCart>
      <ItemCounter> {total} </ItemCounter>
    </CartWrapper>
  );
}