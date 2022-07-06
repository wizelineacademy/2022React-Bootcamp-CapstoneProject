export const getNumberItems = (cart) => {
  return cart.reduce((count, curItem) => {
    return count + curItem.quantity;
  }, 0);
};
