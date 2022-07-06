import ChevronRight from "./../../icons/ChevronRight";
import styled from "@emotion/styled";

export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 84px auto 0;
  width: 100%;
  height: 240px;

  @media (min-width: 588px) {
    height: 400px;
  }

  @media (min-width: 768px) {
    height: 450px;
  }

  @media (min-width: 1439px) {
    width: 1440px;
    height: 500px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: translateX(-50%);
    transition: all 0.5s ease;
  }

  .current {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Arrow = styled(ChevronRight)`
  position: absolute;
  border-radius: 50%;
  color: var(--primary-green);
  font-weight: 400;
  width: 34px;
  height: 34px;
  cursor: pointer;
  transition: all ease 0.5s;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const Next = styled(Arrow)`
  top: 50%;
  transform: translateY(-50%);
  right: 1px;
  @media (min-width: 588px) {
    right: 20px;
  }
`;

export const Prev = styled(Arrow)`
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  left: 2px;
  @media (min-width: 588px) {
    left: 20px;
  }
`;
