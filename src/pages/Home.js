import React from 'react';
import GridCategories from '../components/GridCategories';
import GridProducts from '../components/GridProducts';
import Slider from '../components/Slider';
import { HomeContainer } from '../styles/Home.style';

const Home = (props) => {
  return (
    <div>
      <HomeContainer>
        <Slider />
        <GridCategories />
        <GridProducts />
      </HomeContainer>
    </div>
  );
};

export default Home;
