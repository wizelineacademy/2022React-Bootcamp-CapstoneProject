import styled from "styled-components";
import { bluePrince } from "../../../utils/constant.styles";

export const ProductGrid = styled.div`
  display: flex;
  justify-content: space-around;
  background: rgba(250,250,250,.4);
  margin: 2.5rem 0;

  @media screen and (max-width: 600px){
    margin: 1.5rem 0;
    flex-flow: row wrap;
    max-height: fit-content;
  }
`;

export const ProductItem = styled.a`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  width: 100%;
  height: 2rem;
  font-size: 1.3rem;
  font-weight: 400;
  text-decoration: none;
  color: ${bluePrince};

  &:hover {
    color: rgba(66,134,173,1);
    text-decoration: underline;
  }

  &:not(:first-child){
    border-left: 1px solid ${bluePrince};
  }

  @media screen and (max-width: 1100px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 900px){
    &:not(:first-child){
      border-left: none; 
      margin-right: .2rem;
    } 
  }
  @media screen and (max-width: 600px){
   width: fit-content;
   margin: 0 1rem;
   height: 3.5rem;
  }
`;