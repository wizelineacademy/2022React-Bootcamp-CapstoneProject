import { useReducer } from "react";
import ShopContext from "./shopContext";
import ShopReducer from "./shopReducer";
import { ADD_PRODUCT } from "./../../types/shop/index";

const ShopState = (props) => {
  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(ShopReducer, initialState);

  const addToCart = (product) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product,
    });
  };

  return (
    <ShopContext.Provider value={{ cart: state.cart, addToCart }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopState;
