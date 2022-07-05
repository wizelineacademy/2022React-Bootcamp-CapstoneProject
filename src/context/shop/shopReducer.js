import { ADD_PRODUCT } from "./../../types/shop/index";
import { addProductToCart } from "./reducers/index";

const ShopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.payload, state);
    default:
      return state;
  }
};

export default ShopReducer;
