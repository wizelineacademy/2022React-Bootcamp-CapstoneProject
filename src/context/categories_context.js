import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/categories_reducer';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';

import {
  GET_CATEGORIES_BEGIN,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR
} from '../actions';

const initialState = {
  categories_loading: false,
  categories_error: false,
  categories: [],
  featured_categories: []
};

const CategoriesContext = React.createContext();

// eslint-disable-next-line react/prop-types
export function CategoriesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { data, isLoading } = useFeaturedBanners({
    typeData: 'category',
    size: 30
  });

  const fetchCategories = async () => {
    dispatch({ type: GET_CATEGORIES_BEGIN });
    try {
      const response = data;
      const categories = response.results;
      dispatch({ type: GET_CATEGORIES_SUCCESS, payload: categories });
    } catch (error) {
      dispatch({ type: GET_CATEGORIES_ERROR });
    }
  };

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      // update state here...
      if (!isLoading) {
        fetchCategories();
      }
    }

    return () => {
      unmounted = true;
    };
  }, [isLoading]);

  return (
    <CategoriesContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        ...state
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
// make sure use
export const useCategoriesContext = () => useContext(CategoriesContext);
