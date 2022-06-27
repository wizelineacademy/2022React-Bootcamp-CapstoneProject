import React, { useEffect, useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import {
  AsideBar,
  AsideItem,
  ClearFilters,
  ClearFiltersWrapper,
  ImageGrid,
  ImageResult,
  ProductListMain, 
  Spiner} from './ProductList.styles';
// import FeaturedProducts from '../../mocks/en-us/featured-products.json';
import { ImageWrap, InfoImage } from '../Home/FeaturedProducts/FeaturedProducts.styled';
import { useGetSearch } from '../../utils/hooks/useFetch';
import { ROUTES } from '../../utils/constants';
import { useAllSearch } from '../../utils/hooks/useAllProducts';
import Pagination from './PaginationControl/Pagination';
import './PaginationControl/pagination.styles.css';


export const ProductList = () => {
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();


  const { data: FeaturedProducts } = useAllSearch();
  console.log(FeaturedProducts);

  const categoryParam = new URLSearchParams(location.search).get('category');
  
  let filtersSet = [];

  useEffect(() => {
    let loadingTimeout;
    
    setIsLoading(true);
    loadingTimeout = setTimeout(() => {
      const filtersSet = categoryParam?.split(',') || [];
      const processed = filtersSet.map(str => str.replaceAll(' & ', '--'));
      setFilters(processed)
      const data = categoryParam ? filterProducts(
        filtersSet, FeaturedProducts) : FeaturedProducts?.results;
      const allItems = createCards(data);
      setResults(allItems);
      setIsLoading(false);
    }, 2000);
    
    if (!loadingTimeout) {
      clearTimeout(loadingTimeout);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function handleClick(categoryName) {
    
    filtersSet = manageCategories(categoryName.replaceAll(' & ', '--'), filters);
    setFilters(filtersSet);

    const cardsToFilter = !filtersSet.length 
      ? FeaturedProducts.results
      : filterProducts(filtersSet, FeaturedProducts);

    const cards = createCards(cardsToFilter);
    
    setResults(cards);
  }

  function clearFilterClick() {
    const data = FeaturedProducts.results;
    const allItems = createCards(data);
    setFilters([]);
    setResults(allItems);
  }

  const documentType = '"category"';
  const { data } = useGetSearch({documentType, pageSize: 30});

  const allCategories = data?.results?.map((item, i) => {
    const name = item.data.name.replaceAll(' & ', '--');

    const param = encodeURI(`category=${filters?.join(',')},${name}`);
    
    return(
      <Link 
        to={`${ROUTES.productList}?${param}`}
        key={`categorieItem-${i}`}
        style={{textDecoration: 'none'}}  
      >
        <AsideItem
          onClick={() => handleClick(name)}
          isActive={filters.includes(name)}
        >
          {name}
        </AsideItem>
      </Link>)
  })


  return(
    <>
      <ProductListMain>
        <AsideBar>
          {allCategories}
          {filters.length
            ? (<ClearFiltersWrapper to={ROUTES.productList} >
                <ClearFilters onClick={() => clearFilterClick()} id='Clear'>
                  Clear Filters
                </ClearFilters>
              </ClearFiltersWrapper>)
            : null
          }
        </AsideBar>
        {isLoading
          ? <Spiner />
          : (<ImageGrid>
              {results?.length > 12 
              ? <Pagination data={results} />
              : results
              }
              
            </ImageGrid>)
        }
      </ProductListMain>
    </>
  );
}

function manageCategories(categoryName, filtersState) {
  const filtersArray = filtersState;

  return filtersArray.includes(categoryName)
    ? filtersArray.filter(filterName => filterName !== categoryName)
    : [...filtersArray, categoryName];
}

function filterProducts(filtersSet, FeaturedProducts) {
  let res = [];

  filtersSet.forEach(category => {
    const selection = FeaturedProducts
      ?.results
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

function createCards(products) {
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