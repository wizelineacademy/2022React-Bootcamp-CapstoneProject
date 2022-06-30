import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Pagination from '../ProductList/PaginationControl/Pagination';
import { fetchSearch, searchCardGenerator } from './SearchResults.helper';
import { NotResults, SearchMain } from './SearchResults.styles';

export function SearchResults() {
  const [result, setResult] = useState([]);
  const location = useLocation();  
  
  useEffect(() => {
    let searchQuery = new URLSearchParams(location.search).get('q');
    fetchSearch(searchQuery, setResult);
  }, [location.search])
  
  let allResults = searchCardGenerator(result)

  if (result.results_size === 0) {
    allResults = <NotResults>NO RESULTS FOUND</NotResults>;
  }

  return(
    <SearchMain>
      {result.results_size < 20
        ? allResults
        : <Pagination size='20' data={allResults} />
      }
    </SearchMain>
  );
}
