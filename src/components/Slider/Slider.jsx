import React, { useState, useRef, useEffect } from "react";
import {
  SliderContainer,
  SliderWrapper,
  SlideContainer,
  SlideWrapper,
  SlideContent,
  SlideDescription,
  Button,
  SliderButtons,
  PreviousArrow,
  FowrwardArrow,
  SliderImage,
} from "./SliderElements.js";

const Slider = ({ slides }) => {
  // console.log(slides);
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 2500);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
    // console.log(current);
  };

  const previouSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <SliderContainer>
      <SliderWrapper>
        {slides.map((slide, index) => {
          return (
            <SlideContainer key={new Date() + index}>
              {index === current && (
                <SlideWrapper>
                  <SliderImage
                    src={slide.data.main_image.url}
                    alt={slide.data.main_image.alt}
                  />
                  <SlideContent>
                    <h1>{slide.data.title}</h1>
                    <SlideDescription>
                      {slide.data.description[0].text}
                    </SlideDescription>
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
