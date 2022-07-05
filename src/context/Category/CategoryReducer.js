import { GET_CATEGORIES } from "./CategoryActions";

const CategoryReducer = (state, action) => {
  const { cartload, type } = action;

  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: cartload,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
