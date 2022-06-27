import React, { useEffect, useState } from 'react';
import { useAllSearch } from '../../../utils/hooks/useAllProducts';
import PaginatedResults from '../PaginationControl/Pagination';
import { ImageGrid, ProductListMain, Spiner } from '../ProductList.styles';
import AsideBarComponent from './AsideBar/AsideBar';
import { createCards, handleFilters, handleResults } from './ProductList.helper';
import { useLocation } from "react-router-dom";


export default function ProductList2() {

  const [filters, setFilters] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [results, setResults] = useState([]);
  const location = useLocation();

  let { data, isLoading } = useAllSearch();

  const categoryParam = new URLSearchParams(location.search).get('category');
  
  useEffect(() => {
    if (categoryParam && data?.results) {
      const decodedParam = categoryParam.replaceAll(' & ', '--')
      
      const filtersSet = handleFilters(decodedParam, filters, setIsFiltered, setFilters);
      const cards = handleResults(filtersSet, data);

      setResults(cards);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
  

  const allProducts = data?.results;

  const handleClickAsideBar = (value) => {
    const filterName = value.target.innerText.replaceAll(' & ', '--');
    const filtersSet = handleFilters(filterName, filters, setIsFiltered, setFilters);
    const cards = handleResults(filtersSet, data);
    
    setResults(cards);
  }
  
  const myProducts = createCards(allProducts);

  return (
    <ProductListMain>
      <AsideBarComponent 
        filters={filters}
        handleClickAsideBar={item => handleClickAsideBar(item)}
      />
      <ImageGrid>
        {isLoading
          ? <Spiner />
          : <PaginatedResults data={isFiltered
            ? results
            : myProducts} />
        }
      </ImageGrid>
    </ProductListMain>
  );
}
