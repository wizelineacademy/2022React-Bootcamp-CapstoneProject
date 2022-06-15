import React from "react";

import {
  ProductSlider,
  PrincipalContainer,
  Departments,
  Products,
} from "../components";

import Group, { GroupBody, GroupTitle } from "../components/common/Group";

import Button from "../components/common/Button";
import { VIEW_PAGE, LIST_TYPE } from "../utils/constants";

import featuredBannersData from "../utils/mocks/en-us/featured-banners.json";
import featuredProductsData from "../utils/mocks/en-us/featured-products.json";
import productCategoriesData from "../utils/mocks/en-us/product-categories.json";

const Home = ({ navigate }) => {
  const handleNavigate = (page) => {
    navigate(page);
  };

  return (
    <PrincipalContainer title="Shop">
      <ProductSlider
        data={featuredBannersData}
        controls={true}
        auto={true}
        timeOut={5000}
      />

      <Group>
        <GroupTitle>Departments</GroupTitle>
        <GroupBody>
          <Departments data={productCategoriesData} />
        </GroupBody>
      </Group>

      <Group>
        <GroupTitle>Products</GroupTitle>
        <GroupBody>
          <Products
            viewType={LIST_TYPE.FEATURED_PRODUCTS}
            data={featuredProductsData.results}
          />
        </GroupBody>
      </Group>

      <Button size="block" handler={() => handleNavigate(VIEW_PAGE.PRODUCTS)}>
        <i className="bx bx-store-alt" /> All products
      </Button>
    </PrincipalContainer>
  );
};

export default Home;
