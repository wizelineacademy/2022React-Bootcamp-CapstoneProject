import React from 'react';
import { ReactComponent as ShoppingCart } from '../../images/shopping-cart.svg';
import { ROUTES } from '../../utils/constants';

import { 
  ButtonCart,
  ButtonWrapper,
  ImageWrap,
  InfoImage,
  LinkDetail,
  LinkStyled,
  ProductImage } from './ProductCard.styles';

export function ProductCard({ item }) {
  const itemRoute = `${ROUTES.productDetail}/${item.id}`;
  return (
    <ImageWrap key={item.id}>
      <LinkStyled to={itemRoute} state={item}>
        <ProductImage src={item.data.mainimage.url} alt={item.data.mainimage.alt} />
      </LinkStyled>
      <InfoImage>
        <LinkDetail to={itemRoute} state={item}>
          <h1>{item.data.name}</h1>
        </LinkDetail>
        <h2>{item.data.category.slug}</h2>
        <ButtonWrapper>
          <ButtonCart to={itemRoute} state={item}>
            <ShoppingCart />
          </ButtonCart>
        </ButtonWrapper>
        <p>${item.data.price}</p>
      </InfoImage>
    </ImageWrap>
  );
}

