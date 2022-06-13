import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const blurEffect = keyframes`
  from {
    filter: blur(20px);
  }
  to{
    filter: blur(0);
  }
`;

export const LogoContainer = styled.img`
  cursor: pointer;
  width: 150px;
  animation: ${blurEffect} 1.2s ease;

  @media (min-width: 768px) {
    width: 200px;
  }
`;
