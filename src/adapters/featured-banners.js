export const createBannerAdapter = (object) => {
  const data = object.results;
  const newData = data.map((obj) => ({
    id: obj.id,
    title: obj.data.title,
    description: obj.data.description[0].text,
    urlImage: obj.data.main_image.url,
  }));

  const array = Array.from(newData);

  return array;
};
