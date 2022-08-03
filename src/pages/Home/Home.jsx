import React from "react";
import Page from "../../components/Page";
import Categories from "./Categories";
import BannerSlider from "./BannerSlider";
import ProductsGrid from "./ProductsGrid";
import {
  ButtonViewAll,
  ContainerButtons,
} from "./styled-components/product.styled.component";

const Home = () => {
  return (
    <Page title="Home | Eccomerce">
      <BannerSlider />
      <Categories />
      <ProductsGrid />
      <ContainerButtons>
        <ButtonViewAll to="/products">
          View all products
        </ButtonViewAll>
      </ContainerButtons>
    </Page>
  );
};

export default Home;
