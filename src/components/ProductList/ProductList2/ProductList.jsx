import React, { useEffect, useState } from 'react';
import { useAllSearch } from '../../../utils/hooks/useAllProducts';
import PaginatedResults from '../PaginationControl/Pagination';
import { ImageGrid, ProductListMain, Spiner } from '../ProductList.styles';
import AsideBarComponent from './AsideBar/AsideBar';
import { createCards, filterProducts, manageCategories } from './ProductList.helper';

export default function ProductList2() {

  const [filters, setFilters] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [results, setResults] = useState([]);


  let { data, isLoading } = useAllSearch();


  const allProducts = data?.results;

  const handleClickAsideBar = (value) => {
    const filterName = value.target.innerText.replaceAll(' & ', '--');
    const filtersSet = manageCategories(filterName, filters);
    setIsFiltered(filtersSet.length ? true : false)
    setFilters(filtersSet);

    const cardsToFilter = !filtersSet.length 
      ? data.results
      : filterProducts(filtersSet, data?.results);

    const cards = createCards(cardsToFilter);
    
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

