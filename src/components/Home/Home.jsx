import React from 'react';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import { HomeMain } from './Home.styled';
import ProductCategories from './ProductCategories';
import Slider from './Slider';
import Slogan from './Slogan';

function Home() {
  return(
    <HomeMain>
      <Slogan/>
      <Slider />
      <ProductCategories />
      <FeaturedProducts />
    </HomeMain>
  );
}

export default Home;