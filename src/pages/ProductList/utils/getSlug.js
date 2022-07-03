export const getSlug = (searchParams) => {
  const slug = searchParams.get("category");
  let id = slug === null ? false : slug;
  let category = id ? [id.split(" ")[1]] : [];

  return category;
};
