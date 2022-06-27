import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {  
  appleGreenBackground,
  bluePrince,
  white,
  whiteApple,
  yellowMain } from "../../utils/constant.styles";

export const ProductListMain = styled.div`
  margin: 2.5rem auto;
  display: flex;
  flex-flow: row;
  width: 135em;
  height: fit-content;

  @media screen and (max-width: 1400px){
    width: 90%;
  }
  
  @media screen and (max-width: 660px){
    flex-flow: column;
    justify-content: center;
  }
`;

export const AsideBar = styled.aside`
  display: flex;
  flex-flow: column;
  width: 8.5rem;
  @media screen and (max-width: 660px){
    flex-flow: column wrap;
    margin: auto;
    width: fit-content;
  
  }

  @media screen and (max-width: 450px){
    flex-flow: column wrap;
    width: fit-content;
  
  }
`;

export const AsideItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.5rem;
  color: ${bluePrince};
  text-align: center;
  font-size: 1.2rem;
  padding: 1rem;
  border: 1px solid white;
  &:not(:last-child) {
    border-bottom: none;
  }
  background-color: ${({isActive}) => isActive ? yellowMain : whiteApple};

  @media screen and (max-width: 660px) {
    font-size: 1rem;

    &:not(:last-child) {
    border-right: none;
    border-bottom: 1px solid white;
    }
  }

  @media screen and (max-width: 450px) {
    width: 15rem;
    &:not(:last-child) {
      border-right: 1px solid white;
      border-bottom: none;
    }
  }
`;

export const ImageGrid = styled.div`
  margin-left: 3.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex: 2 1 auto;

  @media screen and (max-width: 660px){
    margin-left: 0;  
  }
`;

export const ImageResult = styled.img`
  margin: .5rem;
  border-radius: .5rem;
  max-height: 15rem;
`;

export const Spiner = styled.div`
  margin: auto;
  border: .5rem solid ${white};
  border-top: .5rem solid ${bluePrince};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: spin .8s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    } 
  }
`;

export const ClearFiltersWrapper = styled(Link)`
  
`;

export const ClearFilters = styled.button`
  cursor: pointer;
  width: 100%;
  height: 3rem;
  margin: 2rem auto;
  font-size: .8rem;
  font-weight: 600;
  border-radius: .5rem;
  text-transform: uppercase;
  color: ${white};
  background: ${bluePrince};
  border: none;
  box-shadow: 0 5px 20px ${appleGreenBackground};
  &:hover {
    background: ${yellowMain};
    color: ${bluePrince};
    transition: all ease .3s;
  }
`;
