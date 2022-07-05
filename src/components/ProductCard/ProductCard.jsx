import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { ROUTES } from '../../utils/constants';
import { useHandleClick } from '../../utils/hooks/useAddToCart';
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
  
  const {
    id,
    data: {
      stock,
      mainimage: {
        url,
        alt,
      },
      name,
      category: {
        slug,
      },
      price,
    },
  } = item;
  
  
  const { shoppingCart, setShoppingCart } = useContext(AppContext);
  
  const handleClick = useHandleClick(stock,
    shoppingCart,
    setShoppingCart,
    name,
    url,
    alt,
    price);
  
  return (
    <ImageWrap key={id} listPageCard={listPageCard}>
      <LinkStyled to={itemRoute} state={item}>
        <ProductImage src={url} alt={alt} />
      </LinkStyled>
      <InfoImage>
        <LinkDetail to={itemRoute} state={item}>
          <h1>{name}</h1>
        </LinkDetail>
        <h2>{slug.replaceAll('--', ' & ')}</h2>
        <ButtonWrapper>
          <AddToCartButton smaller handleClick={handleClick}/>
        </ButtonWrapper>
        <p>${price}</p>
      </InfoImage>
    </ImageWrap>
  );
}
