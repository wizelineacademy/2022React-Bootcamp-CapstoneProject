import React, { useReducer, useRef, useEffect } from "react";

import SearchContext from "./SearchContext";
import SearchReducer from "./SearchReducer";

import * as searchActions from "./SearchActions";

import { useSearchTerm } from "../../utils/hooks/useSearchTerm";

import { TYPE_PAGINATION } from "../../utils/constants";

const SearchState = ({ children }) => {
  const componentMounted = useRef(true);

  const searchInitialState = {
    results: null,
    totalPages: 0,
    currentPage: 1,
    searchTerm: "",
    isLoading: false,
  };

  const [state, dispatch] = useReducer(SearchReducer, searchInitialState);
  const { data, isLoading } = useSearchTerm(
    state.searchTerm,
    state.currentPage
  );

  useEffect(() => {
    if (componentMounted.current && !isLoading) {
      dispatch({
        type: searchActions.GET_RESULT_SEARCH,
        cartload: {
          results: data.results,
          totalPages: data.total_pages,
          currentPage: data.page,
          searchTerm: state.searchTerm,
          isLoading: false,
        },
      });
    }
  }, [data, isLoading, state.searchTerm, state.totalPages, state.searchTerm]);

  const triggerPagination = (action) => {
    let setCurrentPage;
    if (action === TYPE_PAGINATION.PREV && state.currentPage > 1) {
      setCurrentPage = state.currentPage - 1;
    } else if (
      action === TYPE_PAGINATION.NEXT &&
      state.currentPage < state.totalPages
    ) {
      setCurrentPage = state.currentPage + 1;
    }

    dispatch({
      type: searchActions.START_PAGINATION,
      cartload: {
        isLoading: true,
        currentPage: setCurrentPage,
      },
    });
  };

  const getSearchResultByTerm = async (term) => {
    if (componentMounted.current) {
      dispatch({
        type: searchActions.START_SEARCH,
        cartload: {
          searchTerm: term,
          currentPage: 1,
          isLoading: true,
        },
      });
    }
  };

  const searchContextValue = {
    state,
    getSearchResultByTerm,
    triggerPagination,
  };

  return (
    <SearchContext.Provider value={searchContextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchState;
