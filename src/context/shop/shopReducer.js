import {
  ADD_PRODUCT,
  UPDATE_QUANTITY,
  DELETE_ITEM,
  CLEAR_CART,
} from "./../../types";
import { addProductToCart, updateQuantity } from "./reducers";
import { deleteItem } from "./reducers/index";

const ShopReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRODUCT:
      return addProductToCart(payload, state);
    case UPDATE_QUANTITY:
      return updateQuantity(payload, state);
    case DELETE_ITEM:
      return deleteItem(payload, state);
    case CLEAR_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default ShopReducer;
