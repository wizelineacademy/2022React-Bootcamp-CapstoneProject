import Slider from "../components/Slider";
import CategoryGrid from "../components/CategoryGrid";
import { useState } from "react";
const featuredBanners = require("../mocks/en-us/featured-banners.json");
const productCategories = require("../mocks/en-us/product-categories.json");

const Home = () => {
  const bannerResults = featuredBanners.results;
  const categoryResults = productCategories.results;
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex !== bannerResults.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === bannerResults.length - 1) {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(bannerResults.length - 1);
    }
  };

  return (
    <div style={{ height: "100%" }}>
      <Slider
        images={bannerResults}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        activeBanner={slideIndex}
      />
      <CategoryGrid categories={categoryResults} />
    </div>
  );
};

export default Home;
