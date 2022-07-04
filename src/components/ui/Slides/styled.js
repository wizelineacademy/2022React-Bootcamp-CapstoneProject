import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

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
