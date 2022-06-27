import React from 'react';
import { useGetSearch } from '../../../utils/hooks/useFetch';
import { ReactComponent as ShoppingCart } from '../../../images/shopping-cart.svg';
import { 
  ProductImage,
  ProductGrid,
  ImageWrap,
  InfoImage,
  ButtonCart } from './FeaturedProducts.styled';

function FeaturedProducts() {

  const documentType = '"product"';
 
  const { data } = useGetSearch({documentType, pageSize: 16});
  
  const allItems = data?.results?.map((item,i) => {
    return (
      <ImageWrap key={`photo-${i}`} >
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
  })
  return (
    <>
      <ProductGrid>
        {allItems}
      </ProductGrid>
      
    </>
  )
}

export default FeaturedProducts;
