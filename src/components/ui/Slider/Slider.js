import { useState, useEffect } from "react";
import { SliderContainer, Prev, Next } from "./styled";
import { useFeaturedBanners } from "../../../utils";
import { SpinnerBounce, Slides } from ".././";
import PropTypes from "prop-types";

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
        <Slides data={data} currentSlide={currentSlide} />
      )}
    </SliderContainer>
  );
};

Slider.propTypes = {
  autoScroll: PropTypes.bool.isRequired,
  intervalTime: PropTypes.number,
};

export default Slider;
