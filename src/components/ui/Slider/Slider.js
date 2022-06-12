import { useState, useEffect } from "react";
import FeaturedBanners from "../../../mocks/en-us/featured-banners.json";
import { createBannerAdapter } from "./../../../adapters/featured-banners";
import {
  SliderContainer,
  Prev,
  Next,
  Content,
  ContentTitle,
  ContentDescription,
} from "./styled";

const Slider = ({ autoScroll, intervalTime }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mock = createBannerAdapter(FeaturedBanners);
  const slideLength = mock.length;
  let slideInterval;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line
  }, [currentSlide]);

  return (
    <SliderContainer>
      <Prev onClick={prevSlide} />
      <Next onClick={nextSlide} />
      {mock.map((slide, index) => (
        <div
          className={`${index === currentSlide ? "slide current" : "slide"}`}
          key={`${slide.id}`}
        >
          {index === currentSlide && (
            <>
              <img src={slide.urlImage} alt={slide.title} />
              <Content>
                <ContentTitle>{slide.title}</ContentTitle>
                <ContentDescription>{slide.description}</ContentDescription>
              </Content>
            </>
          )}
        </div>
      ))}
    </SliderContainer>
  );
};

export default Slider;
