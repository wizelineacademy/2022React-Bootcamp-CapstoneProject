import React from 'react'
import { ReactComponent as ShoppingCart } from '../../images/shopping-cart.svg';

import { 
  ButtonCart,
  ImageWrap,
  InfoImage,
  ProductImage } from './ProductCard.styles';

export function ProductCard({ item }) {
  return (
    <ImageWrap key={item.id}>
    <ProductImage src={item.data.mainimage.url} alt={item.data.mainimage.alt} />
    <InfoImage>
      <h1>{item.data.name}</h1>
      <h2>{item.data.category.slug}</h2>
      <ButtonCart>
        <ShoppingCart />
      </ButtonCart>
      <p>${item.data.price}</p>
    </InfoImage>
  </ImageWrap>
  );
}

