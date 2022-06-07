import React from "react";
import Categories from "./Categories";
import ContentTop from "./ContentTop";
import Header from "./Header";
import ProductsGrid from "./ProductsGrid";

const Home = () => {
  return (
    <>
      <Header />
      <ContentTop />
      <Categories />
      <ProductsGrid />
    </>
  );
};

export default Home;
