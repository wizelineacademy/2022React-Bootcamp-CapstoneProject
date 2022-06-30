export const createProductAdapter = (object) => {
  const data = object.results;
  const newData = data.map((obj) => ({
    id: obj.id,
    title: obj.data.name,
    category: obj.data.category.slug,
    price: obj.data.price,
    slugs: obj.slugs[0],
    urlImage: obj.data.mainimage.url,
    alt: obj.data.mainimage.alt,
  }));

  const array = Array.from(newData);

  return array;
};
