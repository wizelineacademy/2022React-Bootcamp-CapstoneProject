import Slider from "../components/Slider";
import { useState } from "react";
const { results } = require("../mocks/en-us/featured-banners.json");

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex !== results.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === results.length - 1) {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(results.length - 1);
    }
  };

  return (
    <div>
      <Slider
        images={results}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        activeBanner={slideIndex}
      />
    </div>
  );
};

export default Home;
