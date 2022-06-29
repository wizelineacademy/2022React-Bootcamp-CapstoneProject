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
  const product = item.data;
  return (
    <ImageWrap key={item.id}>
      <LinkStyled to={itemRoute} state={item}>
        <ProductImage src={product.mainimage.url} alt={product.mainimage.alt} />
      </LinkStyled>
      <InfoImage>
        <LinkDetail to={itemRoute} state={item}>
          <h1>{product.name}</h1>
        </LinkDetail>
        <h2>{product.category.slug.replaceAll('--', ' & ')}</h2>
        <ButtonWrapper>
          <ButtonCart to={itemRoute} state={item}>
            <ShoppingCart />
          </ButtonCart>
        </ButtonWrapper>
        <p>${product.price}</p>
      </InfoImage>
    </ImageWrap>
  );
}

