import * as searchActions from "./SearchActions";

const SearchReducer = (state, action) => {
  const { cartload, type } = action;

  switch (type) {
    case searchActions.START_SEARCH:
      return {
        ...state,
        searchTerm: cartload.searchTerm,
        currentPage: cartload.currentPage,
        isLoading: cartload.isLoading,
      };
    case searchActions.GET_RESULT_SEARCH:
      return {
        ...state,
        results: cartload.results,
        totalPages: cartload.totalPages,
        currentPage: cartload.currentPage,
        searchTerm: cartload.searchTerm,
        isLoading: cartload.isLoading,
      };
    case searchActions.START_PAGINATION:
      return {
        ...state,
        currentPage: cartload.currentPage,
        isLoading: cartload.isLoading,
      };
    default:
      return state;
  }
};

export default SearchReducer;
