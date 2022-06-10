import styled from "styled-components";
import { Swiper } from "swiper/react/swiper-react";

export const Carousel = styled(Swiper)`
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
  }
`;

export const SliderItem = styled.img`
  display: block;
  width: 70%;
  height: auto;
  object-fit: cover;

  @media (max-width: 1408px) {
    width: 100%;
  }
`;
