import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFilterContext } from '../context/filter_context';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import { SingleProduct } from '../components';

function ProductDetail() {
  /*  CONTEXT DESTRUCTURING */
  const { filterSingleProduct } = useFilterContext();

  // GET PARAMS OF THE ROUTER
  const { id } = useParams();

  const { data, isLoading } = useFeaturedBanners({
    typeData: 'single',
    size: 1,
    product: id
  });

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      // update state here...
      if (!isLoading) {
        filterSingleProduct(data);
      }
    }
    return () => {
      unmounted = true;
    };
  }, [isLoading]);

  return <SingleProduct />;
}

export default ProductDetail;
