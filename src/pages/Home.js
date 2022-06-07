import React from 'react';
import Footer from '../components/Footer';
import GridCategories from '../components/GridCategories';
import GridProducts from '../components/GridProducts';
import Slider from '../components/Slider';
import { HomeContainer } from '../styles/Home.style';
import Header from './header/Header';

const Home = (props) => {
  return (
    <div>
      <Header />
      <HomeContainer>
        <Slider />
        <GridCategories />
        <GridProducts />
      </HomeContainer>
      <Footer />
    </div>
  );
};

export default Home;
