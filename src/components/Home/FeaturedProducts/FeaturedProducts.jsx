import React from 'react';
import { useGetSearch } from '../../../utils/hooks/useFetch';
import { ProductCard } from '../../ProductCard/ProductCard';
import { Spiner } from '../../ProductList/ProductList.styles';
import { ProductGrid } from './FeaturedProducts.styled';

function FeaturedProducts( {shoppingCart, setShoppingCart } ) {

  const documentType = '"product"';
 
  const { data, isLoading } = useGetSearch({documentType, pageSize: 16});
  
  const allItems = data?.results?.map((item) => {
    return <ProductCard
      item={item}
      key={item.id}
      shoppingCart={shoppingCart}
      setShoppingCart={setShoppingCart}
      />;
  })
  return (
    <>
      <ProductGrid>
        {isLoading
          ? <Spiner />
          : allItems}
      </ProductGrid>
      
    </>
  )
}

export default FeaturedProducts;
