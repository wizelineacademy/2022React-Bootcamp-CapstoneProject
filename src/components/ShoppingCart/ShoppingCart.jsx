import React, { useContext, useState } from 'react';
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
  const [filterdElements, setFilterdElements] = useState([]);

  const handleDelete = (value) => {
    console.log(value);
    setFilterdElements( allElements.filter(item =>{
      return item !== value;
    }))
  }
  const allElements = shoppingCart.map((item, i) => {
    const {
      name,
      alt,
      url,
      price,
      amount,    
    } = item;
    
    return(
      <RowItem key={`row-${i}`}>
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
          <BinButton onClick={({name}) => handleDelete(name)} value={name}/>
        </BinButtonWrapper>
      </RowItem>
    );
  })

  
  return(
    <MainWrapper>
      {filterdElements.length
        ? filterdElements
        : allElements
      }
    </MainWrapper>
  );
}