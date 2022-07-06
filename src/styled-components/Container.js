import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const FadeIn = keyframes`
  0%{
    filter: opacity(0);
    transform: translateY(400px);
  }

  50%{
    filter: opacity(0.1);
  }

  100%{
    filter: opacity(1);
  }
`;

export const Container = styled.div`
  width: 95%;
  margin: 80px auto 10px;
  animation: ${FadeIn} 1s 1;

  @media (min-width: 1439px) {
    width: 1440px;
  }
`;
