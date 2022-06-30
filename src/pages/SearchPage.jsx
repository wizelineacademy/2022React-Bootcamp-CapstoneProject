import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFilterContext } from '../context/filter_context';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import { ListProductsSearch } from '../components';

function SearchPage() {
  /*  CONTEXT DESTRUCTURING */
  const { filterSearch } = useFilterContext();

  // GET PARAMS OF THE ROUTER
  const { searchword } = useParams();

  const { data, isLoading } = useFeaturedBanners({
    typeData: 'search',
    size: 20,
    search: searchword
  });

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      // update state here...
      if (!isLoading) {
        console.log(data);
        filterSearch(data, searchword);
      }
    }
    return () => {
      unmounted = true;
    };
  }, [isLoading]);

  return <ListProductsSearch />;
}

export default SearchPage;
