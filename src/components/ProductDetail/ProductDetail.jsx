import React from 'react';
import { useLocation } from 'react-router-dom'
import { imageGetter, tagsGetter } from './ProductDetail.helper';
import { Slider } from './SliderDetail/SliderDetail';
import {
  AddToCartButton,
  AmountWrapper,
  Category,
  Description,
  DetailMain,
  InfoWrapper,
  Input,
  Price,
  Sku,
  SliderWrapper,
  Stock,
  Tags,
  Title } from './ProductDetail.styles';


export function ProductDetail() {
  const location = useLocation();
  const jsonData = location.state;
  console.log({jsonData});

  const { 
    data: {
      name,
      images,
      price,
      sku,
      category: {slug},
      description,
      stock,
    },
      
    tags,
    } = jsonData;

  const allImg = imageGetter(images);
  const allTags = tagsGetter(tags)

  return (
    <DetailMain>
      <SliderWrapper>
        <Slider images={allImg}/>
      </SliderWrapper>
      <InfoWrapper>
        <Title>{name}</Title>
        <Category>{slug}</Category>
        <Description>{description[0].text}</Description>
        <AmountWrapper>
          <Price>$ {price}</Price>
          <Stock>{stock} in stock</Stock>
          <Input max={stock}/>
          <AddToCartButton>ADD TO CART</AddToCartButton>
        </AmountWrapper>
        <Tags>{allTags}</Tags>
        <Sku><span>SKU: </span>{sku}</Sku>
      </InfoWrapper>
    </DetailMain>
  )
}
