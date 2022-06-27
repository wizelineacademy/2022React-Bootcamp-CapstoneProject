import React from 'react';
import { ImageWrap, InfoImage } from '../../Home/FeaturedProducts/FeaturedProducts.styled';
import { ImageResult } from '../ProductList.styles';

export function createCards(products) {
  return products?.map((item) => {
    const imgData = item.data.mainimage;
    const infoData = item.data;

  return (
    <ImageWrap listPageCard key={`featuredImg${item.id}`} >
      <ImageResult src={imgData.url} alt={imgData.alt} />
        <InfoImage>
          <h1>{infoData.name}</h1>
          <h2>{infoData.category.slug}</h2>
          <p>$ {infoData.price}</p>
      </InfoImage>
    </ImageWrap>
  );
});
}

export function manageCategories(categoryName, filtersState) {
  const filtersArray = filtersState;

  return filtersArray.includes(categoryName)
    ? filtersArray.filter(filterName => filterName !== categoryName)
    : [...filtersArray, categoryName];
}

export function filterProducts(filtersSet, products) {
  let res = [];

  filtersSet.forEach(category => {
    const selection = products
      ?.filter(product => {
        const productSlug = product.data.category.slug.toLowerCase();
        const catName = category.toLowerCase();

        return productSlug === catName;
      });
    
    console.log('select', selection);
    res = [...res, ...selection];
  })

  return res;
}
