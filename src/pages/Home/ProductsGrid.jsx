import React from "react";
import ProductCard from "./components/ProductCard";
import { Container } from "./styled-components/product.styled.component";

import products from "../../mocks/featured-products.json";

const ProductsGrid = () => {
  return (
    <Container>
      {products.results &&
        products.results.map((product, index) => (
          <ProductCard
            key={product.id}
            image={product.data.mainimage.url}
            alt={product.data.mainimage.alt}
            name={product.data.name}
            price={product.data.price}
          />
        ))}
    </Container>
  );
};

export default ProductsGrid;
