import React from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import { ProductsContainer } from "../styled-components/products.styled.component";

const ProductList = ({ products }) => {
  return (
    <ProductsContainer>
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
    </ProductsContainer>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
