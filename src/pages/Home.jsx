import React from "react";

import {
  ProductSlider,
  PrincipalContainer,
  Departments,
  Products,
} from "../components";

import Group, {
  GroupBody,
  GroupTitle,
} from "../components/common/Group";

import featuredBannersData from "../utils/mocks/en-us/featured-banners.json";
import featuredProductsData from "../utils/mocks/en-us/featured-products.json";
import productCategoriesData from "../utils/mocks/en-us/product-categories.json";

const Home = () => {
  return (
    <PrincipalContainer title="Home Page">
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
          <Products viewType="featuredProducts" data={featuredProductsData} />
        </GroupBody>
      </Group>
    </PrincipalContainer>
  );
};

export default Home;
                              