import React from 'react';
import { ROUTES } from '../../../utils/constants';
import { useGetSearch } from '../../../utils/hooks/useFetch';
import { Spiner } from '../../ProductList/ProductList.styles';
import { ProductGrid, ProductItem } from './Productcategories.styled';

function ProductCategories() {

const documentType = '"category"';
const { data, isLoading } = useGetSearch({documentType, pageSize: 30});

const products = data?.results?.map((item, i) => {
  const name = item.data.name.replaceAll(' & ', '--');
  return(
    <ProductItem 
      to={
        `${ROUTES.productList}?category=${name}`} key={`product-${i}`}>
      {item.data.name}
    </ProductItem>
  )
})
  
  return(
    <ProductGrid>
      {isLoading
      ? <Spiner />
      : products}
    </ProductGrid>
  );
}

export default ProductCategories;
