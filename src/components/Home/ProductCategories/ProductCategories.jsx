import React from 'react';
import Products from '../../../mocks/en-us/product-categories.json';
import {ProductGrid, ProductItem} from './Productcategories.styled';

const products = Products.results.map((item, i) => {
  return(
    <ProductItem href='#' key={`product-${i}`}>
      {item.data.name}
    </ProductItem>
  )
})

function ProductCategories() {
  return(
    <ProductGrid>
      {products}
    </ProductGrid>
  );
}

export default ProductCategories;