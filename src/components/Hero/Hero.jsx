import React, {useState, useEffect, useRef} from "react";
import {
  HeroMainContainer,
  HeroMainWrapper,
  HeroMainTitle,
  HeroContentContainer,
  HeroImageSlider,
} from "./HeroElements";

const Hero = ({ slides }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 4000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  return (
    <HeroMainContainer>
      <HeroMainWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroContentContainer key={new Date() + index}>
              {index === current && (
                <>
                  <HeroImageSlider
                    src={slide.data.main_image.url}
                    alt={slide.data.main_image.alt}
                  />
                  <HeroMainTitle>uShop</HeroMainTitle>
                </>
              )}
            </HeroContentContainer>
          );
        })}
       
      </HeroMainWrapper>
    </HeroMainContainer>
  );
};

export default Hero;
