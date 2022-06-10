import React from 'react';
import { AsideBar, AsideItem } from './ProductList.styles';
import CategoriesData from '../../mocks/en-us/product-categories.json';

const allProducts = CategoriesData.results.map(item => {
  return(
    <AsideItem>{item.data.name}</AsideItem>
  );
})

export const ProductList = () => {
  return(
    <AsideBar>
      {allProducts}
    </AsideBar>
  );
}