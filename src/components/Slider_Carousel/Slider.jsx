import React, { useState, useRef } from "react";
import {
  SliderContainer,
  SliderWrapper,
  SlideContainer,
  SlideWrapper,
  SlideContent,
  Button,
  SliderButtons,
  PreviousArrow,
  FowrwardArrow,
  SliderImage,
} from "./SliderElements.js";

const Slider = ({ categories }) => {
  const [current, setCurrent] = useState(0);
  const length = categories.length;
  const timeout = useRef(null);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previouSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(categories) || categories.length <= 0) {
    return null;
  }
  return (
    <SliderContainer>
      <SliderWrapper>
        {categories.map((catego, index) => {
          return (
            <SlideContainer key={new Date() + index}>
              {index === current && (
                <SlideWrapper>
                  <SliderImage
                    src={catego.data.main_image.url}
                    alt={catego.data.main_image.alt}
                  />
                  <SlideContent>
                    <h1>{catego.data.name}</h1>
                    <Button> Buy Now </Button>
                  </SlideContent>
                </SlideWrapper>
              )}
            </SlideContainer>
          );
        })}
        <SliderButtons>
          <PreviousArrow onClick={previouSlide} />
          <FowrwardArrow onClick={nextSlide} />
        </SliderButtons>
      </SliderWrapper>
    </SliderContainer>
  );
};

export default Slider;
