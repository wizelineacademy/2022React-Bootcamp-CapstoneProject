export const getSubtotal = (cart) => {
  return cart.reduce((subtotal, { quantity, price }) => {
    return subtotal + quantity * price;
  }, 0);
};
