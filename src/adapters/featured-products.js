export const createProductAdapter = (object) => {
  const data = object.results;
  const newData = data.map((obj) => ({
    id: obj.id,
    title: obj.data.name,
    category: obj.data.category.slug,
    price: obj.data.price,
    stock: obj.data.stock,
    sku: obj.data.sku,
    slugs: obj.slugs[0],
    tags: obj.tags,
    description: obj.data.description[0].text,
    specs: obj.data.specs,
    urlImage: obj.data.mainimage.url,
    gallery: obj.data.images,
    alt: obj.data.mainimage.alt,
  }));

  const array = Array.from(newData);

  return array;
};
