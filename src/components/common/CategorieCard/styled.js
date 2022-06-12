import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const FadeEffect = keyframes`
from{
opacity: 0;
}
to{
opacity: 1;
}
`;

export const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  animation: ${FadeEffect} ease 2s;

  & * {
    transition: all ease-in-out 0.3s;
  }

  img {
    width: 100%;
    height: 100%;
  }

  &:hover .__animated-label {
    transform: translate(-50%, -50px);
  }

  &:hover .__animated-link {
    filter: opacity(1);
    transform: translate(-50%, -20px);
  }

  &:hover img {
    transform: scale(1.2) translate(20px, 15px);

    @media (min-width: 470px) {
      transform: scale(1.1) translate(20px, 15px);
    }
  }

  &:hover:before {
    background-color: rgba(0, 0, 0, 0.6);
  }

  &:before {
    position: absolute;
    content: "";
    z-index: 23;
    width: 100%;
    height: 100%;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    transition: all ease-in-out 0.3s;
  }
`;

export const CategorieLabel = styled.a`
  position: absolute;
  z-index: 24;
  text-decoration: none;
  font-size: 32px;
  color: white;
  font-weight: 500;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export const CategorieLink = styled.a`
  position: absolute;
  text-decoration: none;
  filter: opacity(0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 24;
  font-size: 20px;
  color: white;
  font-weight: 500;
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);
`;
