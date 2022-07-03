import React from 'react';
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
  Price,
  Sku,
  SliderWrapper,
  Stock,
  Table,
  Tags,
  TBody,
  Title } from './ProductDetail.styles';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';


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
      specs,
    },
      
    tags,
    } = jsonData;

  const allImg = imageGetter(images);
  const allTags = tagsGetter(tags);
  const allSpecs = specsGetter(specs);

  return (
    <DetailMain>
      <SliderWrapper>
        <Slider images={allImg}/>
      </SliderWrapper>
      <InfoWrapper>
        <Title>{name}</Title>
        <Category>{slug.replaceAll('--', ' & ')}</Category>
        <Description>{description[0].text}</Description>
        <AmountWrapper>
          <Price>$ {price}</Price>
          <Stock>{stock} in stock</Stock>
          <Input max={stock}/>
          <AddToCartButton />
        </AmountWrapper>
        <Tags>{allTags}</Tags>
        <Table><TBody>{allSpecs}</TBody></Table>
        <Sku><span>SKU: </span>{sku}</Sku>
      </InfoWrapper>
    </DetailMain>
  )
}
