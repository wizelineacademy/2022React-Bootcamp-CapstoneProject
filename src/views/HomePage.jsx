import React from "react";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import Slider from "../components/Slider/Slider";
import Footer from '../components/Footer/Footer';

//importing mock data
import FeaturedBanners from "../mocks/es-mx/featured-banners.json"; 

const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Slider slides={FeaturedBanners.results}/>
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
