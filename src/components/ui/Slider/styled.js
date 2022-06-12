import { keyframes } from "@emotion/react";
import ChevronRight from "./../../icons/ChevronRight";
import styled from "@emotion/styled";

export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
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

export const SlideUp = keyframes`
  0%{
    visibility: visible;
    opacity: 0;
    top: -25%;
  }

  50%{
      opacity: 0.3;
      filter: blur(20px);
  }

  100%{
    visibility: visible;
    opacity: 1;
    top: 50%;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 80%;
  padding: 20px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.4);

  @media (min-width: 588px) {
    width: 60%;
    top: 50%;
    left: 25%;
    padding: 30px;
    transform: translateX(-25%) translateY(-50%);
  }

  & > * {
    margin-bottom: 20px;
    transition: 0.3s;
  }

  animation: ${SlideUp} 0.9s ease;
  animation-fill-mode: forwards;
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

export const ContentTitle = styled.h2`
  font-size: 20px;

  color: var(--primary-green);
  @media (min-width: 588px) {
    font-size: 30px;
  }
`;
export const ContentDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
  font-size: 15px;
  text-align: left;
  color: white;
  @media (min-width: 588px) {
    font-size: 18px;
  }
`;
