import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { ReactComponent as BinButton } from '../../images/bin.svg';
import {
  RowItem,
  Image,
  Name,
  Price,
  MainWrapper,
  Amount, 
  BinButtonWrapper,
  AmountControllerButton,
  AmountWrapper,
  UnitPriceWrapper,
  UnitPriceTitle} from './ShoppingCart.styles';

export const ShoppingCart = () => {

const { shoppingCart, setShoppingCart } = useContext(AppContext);

  const elements = shoppingCart.map(item => {

    const {
      name,
      alt,
      url,
      price,
      amount,    
    } = item;

    return(
      <RowItem>
        <Image src={url} alt={alt} />
        <Name>{name}</Name>
        <UnitPriceWrapper>
          <UnitPriceTitle>
            UNIT PRICE
          </UnitPriceTitle>
          <Price>$ {price}</Price>
        </UnitPriceWrapper>
        <AmountWrapper>
          <AmountControllerButton>-</AmountControllerButton>
          <Amount>{amount}</Amount>
          <AmountControllerButton>+</AmountControllerButton>
        </AmountWrapper>
        <BinButtonWrapper>
          <BinButton />
        </BinButtonWrapper>
      </RowItem>
    );
  })
  
  return(
    <MainWrapper>

      {elements}
    </MainWrapper>
  );
}