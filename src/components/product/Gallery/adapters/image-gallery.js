import { v4 as uuidv4 } from "uuid";

export const createGalleryAdapter = (object) => {
  const newData = object.map((img) => ({
    id: uuidv4(),
    url: img.image.url,
  }));

  const array = Array.from(newData);

  return array;
};
