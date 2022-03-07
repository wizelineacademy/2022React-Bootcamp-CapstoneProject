import React from "react";
import "./FeaturedProduct.css";
import Card from "../Card/Card";
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";

const FeaturedProducts = () => {
  const { data, isLoading } = useFeaturedProducts();
  if (isLoading) {
    return <div>{"..."}</div>;
  }

  return (
    <div>
      <h4>Featured Products</h4>
      <div className='content'>
        {data.results.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.data.name}
            image={product.data.mainimage.url}
            price={product.data.price}
            category={product.data.category.slug}
            isProduct={true}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
