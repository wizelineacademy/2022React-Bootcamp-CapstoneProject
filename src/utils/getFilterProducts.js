export const getFilterProducts = (products, filters) => {
  const newData = products.filter(
    (product) => filters.length === 0 || filters.includes(product.category)
  );
  return newData;
};
