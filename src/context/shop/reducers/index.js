export const addProductToCart = (product, state) => {
  const { cart } = state;
  if (cart.some((item) => item.id === product.id)) {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        item.quantity = product.quantity;
      }
      return item;
    });

    return { ...state, cart: updatedCart };
  } else {
    return { ...state, cart: [...cart, product] };
  }
};

export const updateQuantity = (product, state) => {
  const { cart } = state;
  const updatedCart = cart.map((item) => {
    if (item.id === product.id) {
      item.quantity = product.quantity;
    }
    return item;
  });

  return { ...state, updatedCart };
};

export const deleteItem = (id, state) => {
  const { cart } = state;
  const updatedCart = cart.filter((item) => item.id !== id);

  return {
    ...state,
    cart: updatedCart,
  };
};
