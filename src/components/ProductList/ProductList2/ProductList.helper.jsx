import React from 'react';
import { ProductCard } from '../../ProductCard/ProductCard';

export function createCards(products) {
  return products?.map((item) => { 
    return (<ProductCard item={item} key={item.id}/>);
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
      }) || [];
    
    res = [...res, ...selection];
  })

  return res;
}

export function handleFilters(filterName, filters, setIsFiltered, setFilters) {
  const filtersSet = manageCategories(filterName, filters);
  setIsFiltered(filtersSet.length ? true : false);
  setFilters(filtersSet);

  return filtersSet;
}

export function handleResults(filtersSet, data) {
  const cardsToFilter = !filtersSet.length
    ? data.results
    : filterProducts(filtersSet, data?.results);

  const cards = createCards(cardsToFilter);

  return cards;
}
