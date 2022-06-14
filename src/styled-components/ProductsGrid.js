import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const FadeOut = keyframes`
  0%{
  filter: opacity(0);
  transform: translateY(50px);
  }


  50%{
    filter: opacity(0.1);
  }


  100%{
    filter: opacity(1);
  }
`;

export const ProductsGrid = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  animation: ${FadeOut} 0.7s;
`;
