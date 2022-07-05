import * as CartActions from "./CartActions";

const CartReducer = (state, action) => {
  const { cartload, type } = action;

  switch (type) {
    case CartActions.ADD_PRODUCTS:
      return {
        ...state,
        items: cartload,
      };
    case CartActions.UPDATE_PRODUCTS:
      return {
        ...state,
        items: cartload,
      };
    case CartActions.DELETE_PRODUCTS:
      return {
        ...state,
        items: cartload,
      };
    default:
      return state;
  }
};

export default CartReducer;
