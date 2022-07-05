import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { imageGetter, specsGetter, tagsGetter } from './ProductDetail.helper';
import { Slider } from './SliderDetail/SliderDetail';
import {
  AmountWrapper,
  Category,
  Description,
  DetailMain,
  InfoWrapper,
  Input,
  OutOfStock,
  Price,
  Sku,
  SliderWrapper,
  Stock,
  Table,
  Tags,
  TBody,
  Title } from './ProductDetail.styles';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';


export function ProductDetail( { setShoppingCart, shoppingCart }) {
  const location = useLocation();
  const jsonData = location.state;
  console.log({jsonData});

  const { 
    data: {
      name,
      mainimage: {
        alt,
        url,
      },
      images,
      price,
      sku,
      category: {slug},
      description,
      stock,
      specs,
    },
      
    tags,
    } = jsonData;

  const allImg = imageGetter(images);
  const allTags = tagsGetter(tags);
  const allSpecs = specsGetter(specs);

  const [actualStock, setActualStock] = useState(stock);
  const [inputValue, setInputValue] = useState(1);

  function handleClick() {
    console.log('clicked');
    setActualStock(actualStock - inputValue);
    if (inputValue > 0) {
      setShoppingCart([...shoppingCart,
        {
          name,
          url,
          alt,
          price,
          amount: inputValue,
        }])
    } else {
      alert('The minimum amount is 1')
      return;
    }
  }

  
  function handleChange(e) {
    const value = e.target.value;
    setInputValue(value)
    console.log('value', value);
  }

  return (
    <DetailMain>
      <SliderWrapper>
        <Slider images={allImg}/>
      </SliderWrapper>
      <InfoWrapper>
        <Title>{name}</Title>
        <Category>{slug.replaceAll('--', ' & ')}</Category>
        <Description>{description[0].text}</Description>
        {actualStock < 1 
          ? <OutOfStock>OUT OF STOCK</OutOfStock>
          : (<AmountWrapper>
              <Price>$ {price}</Price>
              <Stock>{actualStock} in stock</Stock>
              <Input
                max={actualStock}
                onChange={handleChange}
                value={inputValue}
                />
              <AddToCartButton smaller={false} handleClick={handleClick}/>
            </AmountWrapper>)
        }
        <Tags>{allTags}</Tags>
        <Table><TBody>{allSpecs}</TBody></Table>
        <Sku><span>SKU: </span>{sku}</Sku>
      </InfoWrapper>
    </DetailMain>
  )
}
