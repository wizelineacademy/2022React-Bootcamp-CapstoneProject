import React from "react";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import Slider from "../components/Slider/Slider";
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Slider />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
