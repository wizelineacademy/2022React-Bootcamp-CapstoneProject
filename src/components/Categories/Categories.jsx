import React from "react";
import { useProductCategories } from "../../utils/hooks/useProductCategories";
import Card from "../Card/Card";

const ProductCategories = () => {
  const { data, isLoading } = useProductCategories();
  if (isLoading) {
    return <div>{"..."}</div>;
  }

  return (
    <section>
      <h4>Categories</h4>
      <div>
        {data.results.map((category) => (
          <Card
            key={category.id}
            id={category.id}
            name={category.data.name}
            image={category.data.main_image.url}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
