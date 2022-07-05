import React, { useReducer, useEffect } from "react";

import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import * as CartActions from "./CartActions";

const CartState = ({ children }) => {

  const cartInitialState = {
    items:
      localStorage.getItem("cartItems") !== null
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
  };

  const [state, dispatch] = useReducer(CartReducer, cartInitialState);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.items));
  }, [state.items]);

  const addProduct = (product) => {
    dispatch({
      type: CartActions.ADD_PRODUCTS,
      cartload: sorting([...state.items, product]),
    });
  };

  const updateQuantityProduct = (quantity, productId) => {
    const product = state.items.find((e) => e.productId === productId);
    if (product) {
      const products = state.items.filter(
        (e) => e.productId !== product.productId
      );
      dispatch({
        type: CartActions.UPDATE_PRODUCTS,
        cartload: sorting([...products, { ...product, quantity }]),
      });
    }
  };

  const removeProduct = (productId) => {
    dispatch({
      type: CartActions.DELETE_PRODUCTS,
      cartload: sorting(state.items.filter((e) => e.productId !== productId)),
    });
  };

  const sorting = (items) => {
    return items?.sort((a, b) =>
      a.productName > b.productName ? 1 : b.productName > a.productName ? -1 : 0
    );
  };

  const cartContextValue = {
    state,
    addProduct,
    updateQuantityProduct,
    removeProduct,
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
