export const createCategoriesAdapter = (object) => {
  const data = object.results;
  const newData = data.map((obj) => ({
    id: obj.id,
    slugs: obj.slugs,
    name: obj.data.name,
    alt: obj.data.main_image.alt,
    urlImage: obj.data.main_image.url,
  }));

  const array = Array.from(newData);

  return array;
};
