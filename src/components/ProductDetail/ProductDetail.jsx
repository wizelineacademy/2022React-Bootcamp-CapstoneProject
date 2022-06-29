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
  Table,
  Tags,
  TBody,
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
      specs,
    },
      
    tags,
    } = jsonData;

  const allImg = imageGetter(images);
  const allTags = tagsGetter(tags);

  const allSpecs = specs.map((spec, i) => {
    const name = spec.spec_name;
    const value = spec.spec_value;
    return(
        <tr key={`tableRow-${i}`}>
          <th>{name}</th>
          <td>{value}</td>
        </tr>
    );
  })

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
          <AddToCartButton>ADD TO CART</AddToCartButton>
        </AmountWrapper>
        <Tags>{allTags}</Tags>
        <Table><TBody>{allSpecs}</TBody></Table>
        <Sku><span>SKU: </span>{sku}</Sku>
      </InfoWrapper>
    </DetailMain>
  )
}
