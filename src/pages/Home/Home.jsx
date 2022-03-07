import React from "react";
import Categories from "../../components/Categories/Categories";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
