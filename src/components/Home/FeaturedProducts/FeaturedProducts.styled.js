import styled from "styled-components";
import { 
  appleGreenBackground,
  bluePrince,
  whiteApple } from "../../../utils/constant.styles";

export const ProductGrid = styled.div`
  background: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const ProductImage = styled.img`
  max-height: 15rem;
  border-radius: .5rem;
  margin: .7rem;
`;

export const ImageWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 1.2rem;
  border-radius: .5rem;
  width: ${(listPageCard) => listPageCard ? '21.5rem' : '25rem'};
  max-height: ${(listPageCard) => listPageCard ? '15rem' : 'fit-content'};
  box-shadow:  0 5px 20px ${appleGreenBackground};  
  background: ${whiteApple};

  @media screen and (max-width: 1250px){
    width: 30rem;
  }

  @media screen and (max-width: 950px){
    width: ${listPageCard => listPageCard ? '30rem' : '25rem'};
  }

  @media screen and (max-width: 806px){
    width: 30rem;
  }
`;

export const InfoImage = styled.div`
  color: ${bluePrince};
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-right: 1rem;
  text-align: right;
  
  & h1 {
    font-size: 1rem;
    text-transform: uppercase;
    margin-top: 3rem;
  }

  & h2 {
    font-size: .5;
    text-transform: capitalize;
    margin-top: -0.8rem;
    flex: 2 1 auto;
    font-weight: 400;
  }

  & p {
    font-size: 1.2rem;
    color: gray;
  }
`;
