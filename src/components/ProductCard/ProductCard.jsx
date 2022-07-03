import React from 'react';
import { ROUTES } from '../../utils/constants';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';

import { 
  ButtonWrapper,
  ImageWrap,
  InfoImage,
  LinkDetail,
  LinkStyled,
  ProductImage } from './ProductCard.styles';

export function ProductCard({ item, listPageCard }) {
  const itemRoute = `${ROUTES.productDetail}/${item.id}`;
  const product = item.data;
  return (
    <ImageWrap key={item.id} listPageCard={listPageCard}>
      <LinkStyled to={itemRoute} state={item}>
        <ProductImage src={product.mainimage.url} alt={product.mainimage.alt} />
      </LinkStyled>
      <InfoImage>
        <LinkDetail to={itemRoute} state={item}>
          <h1>{product.name}</h1>
        </LinkDetail>
        <h2>{product.category.slug.replaceAll('--', ' & ')}</h2>
        <ButtonWrapper>
          <AddToCartButton smaller/>
        </ButtonWrapper>
        <p>${product.price}</p>
      </InfoImage>
    </ImageWrap>
  );
}

