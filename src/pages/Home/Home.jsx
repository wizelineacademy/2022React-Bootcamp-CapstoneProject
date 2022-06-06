import React from "react";

import Layout from "components/Layout";
import featuredBanners from "mocks/en-us/featured-banners.json";
import featuredProducts from "mocks/en-us/featured-products.json";
import productCategories from "mocks/en-us/product-categories.json";
import FeaturedProducts from "components/FeaturedProducts";
import FeaturedBanner from "components/FeaturedBanner";
import Carousel from "components/Carousel";

export const Home = () => (
  <Layout>
    <Carousel itemList={productCategories.results} />
    <FeaturedBanner itemList={featuredBanners.results} />
    <FeaturedProducts itemList={featuredProducts.results} />
  </Layout>
);

export default Home;
