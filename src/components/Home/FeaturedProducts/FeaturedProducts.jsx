import React from 'react';
import { ProductImage, ProductGrid, ImageWrap, InfoImage } from './FeaturedProducts.styled';
import FeaturedItems from '../../../mocks/en-us/featured-products.json';

const allItems = FeaturedItems.results.map((item,i) => {
  return (
    <ImageWrap key={`photo-${i}`} >
      <ProductImage src={item.data.mainimage.url} alt='' />
      <InfoImage>
        <h1>{item.data.name}</h1>
        <h2>{item.data.category.slug}</h2>
        <p>${item.data.price}</p>
      </InfoImage>
    </ImageWrap>
  );
})

function FeaturedProducts() {
  return (
    <ProductGrid>
      {allItems}
    </ProductGrid>
  )
}

export default FeaturedProducts;