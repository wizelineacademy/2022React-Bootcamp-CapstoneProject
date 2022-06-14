import React, { useEffect, useState } from 'react';
import {
  AsideBar,
  AsideItem,
  ImageGrid,
  ImageResult,
  ProductListMain, 
  Spiner} from './ProductList.styles';
import CategoriesData from '../../mocks/en-us/product-categories.json';
import FeaturedProducts from '../../mocks/en-us/featured-products.json';
import { ImageWrap, InfoImage } from '../Home/FeaturedProducts/FeaturedProducts.styled';
import { PaginationControl } from './PaginationControl/PaginationControl';

export const ProductList = () => {
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let filtersSet = [];

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const allItems = createCards(FeaturedProducts.results);
      setResults(allItems);
      setIsLoading(false);
    }, 2000);
  }, []);


  function handleClick(categoryName) {
    filtersSet = manageCategories(categoryName, filters);
    setFilters(filtersSet);
    let cards = []
    
    if (!filtersSet.length) {
      cards = createCards(FeaturedProducts.results);
    } else {
      const filteredCategories = filterProducts(filtersSet);
      cards = createCards(filteredCategories);
    }

    setResults(cards);
  }

  const allProducts = CategoriesData.results.map((item, i) => {
    const name = item.data.name;
    
    return(
      <AsideItem 
        key={`categorieItem-${i}`}
        onClick={() => handleClick(name)}
        isActive={filters.includes(name)}
      >
        {name}
      </AsideItem>
    );
  })


  return(
    <>
      <ProductListMain>
        <AsideBar>
          {allProducts}
        </AsideBar>
        {isLoading
          ? <Spiner />
          : (<ImageGrid>
              {results}
            </ImageGrid>)
        }
      </ProductListMain>
      <PaginationControl />
    </>
  );
}

function manageCategories(categoryName, filtersState) {
  const filtersArray = filtersState;

  return filtersArray.includes(categoryName)
    ? filtersArray.filter(filterName => filterName !== categoryName)
    : [...filtersArray, categoryName];
}


function filterProducts(filtersSet) {
  let res = [];

  filtersSet.forEach(category => {
    const selection = FeaturedProducts
      .results
      .filter(product => {
        const productSlug = product.data.category.slug.toLowerCase();
        const catName = category.toLowerCase();

        return productSlug === catName;
      });
      
    res = [...res, ...selection];
  })

  return res;
}

function createCards(products) {
  return products.map((item) => {
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