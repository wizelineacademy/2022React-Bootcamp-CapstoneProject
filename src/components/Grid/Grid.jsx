import React from "react";
import {
  GridContainer,
  GridWrapper,
  Gridcontent,
  ProductContainer,
  ProductName,
  ProductImage,
  ProductCategory,
  ProductPrice,
} from "./GridElements";

const Grid = ({ products }) => {
  console.log(products);
  return (
    <GridContainer>
      <GridWrapper>
        <h1
          style={{
            fontFamily: "sans-serif",
            fontSize: "50px",
            textAlign: "center",
          }}
        >
          {" "}
          Featured Products
        </h1>
        <Gridcontent>
          {products.map((product, index) => {
            return (
              <ProductContainer key={new Date() + index}>
                <ProductCategory> {product.data.category.slug}</ProductCategory>
                <ProductImage
                  src={product.data.images[0].image.url}
                  alt="product picture"
                />
                <ProductName>{product.data.name}</ProductName>
                <ProductPrice>${product.data.price} </ProductPrice>
              </ProductContainer>
            );
          })}
        </Gridcontent>
      </GridWrapper>
    </GridContainer>
  );
};

export default Grid;
