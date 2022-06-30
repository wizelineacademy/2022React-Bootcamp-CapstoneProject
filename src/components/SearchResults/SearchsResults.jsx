import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { fetchSearch } from './SearchResults.helper';

export function SearchResults() {
  const [result, setResult] = useState([]);
  const location = useLocation();  
  
  useEffect(() => {
    let searchQuery = new URLSearchParams(location.search).get('q');
    fetchSearch(searchQuery, setResult);
  }, [location.search])
  
  console.log(result);

  return result?.results?.map(item => <h1>{item.data.name}</h1>) || <h1>hey</h1>;

}


