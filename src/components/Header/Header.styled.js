import styled from 'styled-components';
import {
  bluePrince,
  yellowMain,
  black } from '../../utils/constant.styles';

export const HeaderMain = styled.header`
  width: 135em;
  height: fit-content;
  max-height: 10rem;
  background: ${({ isYellow }) => (isYellow ? yellowMain : black)};
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius: .5rem;
  border-top-left-radius: .5rem;
  margin: 3rem auto 0;

  @media screen and (max-width: 1400px){
    width: 90%;
  }
  
  @media screen and (max-width: 800px){
    max-height: 20rem;
    flex-flow: row wrap;
    justify-content: space-between;
    padding-bottom: 2rem;
  }
`;

export const Name = styled.h1`
  font-size: 3.5rem;
  text-indent: 2rem;
  color: ${bluePrince};
  flex: 2 1 auto;
  font-weight: 600;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    justify-content: center;
    text-indent: 0;
    width: 65%;
  }
  @media screen and (max-width: 485px) {
    justify-content: center;
    text-indent: 0;
    width: fit-content;
  }
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-top-left-radius: .5rem;
  margin-left: 0;
  width: 10rem;
  height: 10rem;
`;
