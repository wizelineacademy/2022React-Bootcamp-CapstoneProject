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
