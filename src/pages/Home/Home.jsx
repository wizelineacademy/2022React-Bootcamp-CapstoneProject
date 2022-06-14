import React from "react";
import Categories from "./Categories";
import ContentTop from "./ContentTop";
import ProductsGrid from "./ProductsGrid";
import {
  ButtonViewAll,
  ContainerButtons,
} from "./styled-components/product.styled.component";

const Home = ({ setNavigation }) => {
  const handleClickNav = () => {
    setNavigation(1);
  };

  return (
    <>
      <ContentTop />
      <Categories />
      <ProductsGrid />
      <ContainerButtons>
        <ButtonViewAll onClick={handleClickNav}>
          View all products
        </ButtonViewAll>
      </ContainerButtons>
    </>
  );
};

export default Home;
