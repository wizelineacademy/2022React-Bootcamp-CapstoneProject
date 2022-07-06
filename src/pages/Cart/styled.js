import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const DetailsContainer = styled.div`
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Block = styled.div`
  padding: 15px 20px;
  width: 100%;
  background-color: var(--primary-green);
  color: white;
  font-weight: 500;
  font-size: 22px;
  text-transform: capitalize;
`;

export const WrapperList = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 70%;
  }
`;

export const BlurIn = keyframes`
0%{
  filter: blur(30px);
  transform: translateY(50px);
}
100%{
 transform: translateY(0); 
 opacity:1;
}
`;

export const Message = styled.h2`
  text-align: center;
  font-weight: 400;
  margin-top: 100px;
  font-size: 30px;
  animation: 2s ${BlurIn};
`;
