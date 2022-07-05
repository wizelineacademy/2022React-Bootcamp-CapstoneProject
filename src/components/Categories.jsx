import React, { useContext } from "react";

import CategoryContext from "../context/Category/CategoryContext";

import { CardCategory, Grid, Loading } from "./common";

const Categories = () => {
  const { categories } = useContext(CategoryContext);

  return !categories ? (
    <Loading text="Loading Categories..." styles={{ height: "100%" }} />
  ) : (
    <section className="categories">
      <Grid col={5} mdCol={1} smCol={1} gap={5}>
        {categories.map((item) => (
          <CardCategory
            key={item.id}
            categoryName={item.data.name}
            imageUrl={item.data.main_image.url}
            imageAlt={item.data.main_image.alt}
            categorySlug={item.id}
          />
        ))}
      </Grid>
    </section>
  );
};

export default Categories;
