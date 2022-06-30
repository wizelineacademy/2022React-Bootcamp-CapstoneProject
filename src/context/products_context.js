/* eslint-disable no-unused-vars */
import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/products_reducer';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';

import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from '../actions';

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: []
};

const ProductsContext = React.createContext();

// eslint-disable-next-line react/prop-types
export function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { data, isLoading } = useFeaturedBanners({
    typeData: 'product',
    size: 30
  });

  const fetchProducts = () => {
    const response = data;
    const products = response.results;
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
  };

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      // update state here...
      if (!isLoading) {
        fetchProducts();
      }
    }

    return () => {
      unmounted = true;
    };
  }, [isLoading]);

  return (
    <ProductsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        ...state
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
// make sure use
export const useProductsContext = () => useContext(ProductsContext);
