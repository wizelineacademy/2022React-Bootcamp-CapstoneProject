import React from "react";
import Slider from "../../components/Slider/Slider";
import Card from "../../components/Card/Card";
import Category from "../../components/Category/Category";

import { Container, ProductsContainer, Title } from "./Home.style";

function Home({ categories, products, banners }) {
  return (
    <Container>
      <Slider banners={banners} />
      <Title>Categories</Title>
      <ProductsContainer>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ProductsContainer>
      <Title>All products</Title>
      <ProductsContainer>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
}

export default Home;
