import { useState, useEffect } from "react";
import {
  SliderContainer,
  Prev,
  Next,
  Content,
  ContentTitle,
  ContentDescription,
} from "./styled";
import { useFeaturedBanners } from "./../../../utils/hooks/useFeaturedBanners";
import { SpinnerBounce } from "../SpinnerBounce";

const Slider = ({ autoScroll, intervalTime }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data, isLoading } = useFeaturedBanners();
  const slideLength = data?.length;
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
      {isLoading ? (
        <SpinnerBounce />
      ) : (
        data?.map((slide, index) => (
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
        ))
      )}
    </SliderContainer>
  );
};

export default Slider;
