import styled from 'styled-components';
import { bluePrince, grey, whiteApple } from '../../utils/constant.styles';

export const SearchMain = styled.main`
  width: 135em;
  height: fit-content;
  margin: 3rem auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  border-radius: .5rem;
  color: ${bluePrince};

  @media screen and (max-width: 1400px){
    width: 90%;
  }
  
  @media screen and (max-width: 800px){
    height: fit-content;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-bottom: 2rem;
  }
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 33rem;
  background: ${whiteApple};
  border-radius: .5rem;
  margin: 1.2rem;
`;

export const Image = styled.img`
  float: left;
  width: 45%;
  height: fit-content;
  border-radius: .5rem;
  
`;

export const Title = styled.label`
  margin: .8rem auto;
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

export const Category = styled.label`
  text-transform: uppercase;
  font-size: .9rem;
`;

export const Description = styled.p`
  text-align: justify;
  font-size: 1rem;
`;

export const Price = styled.label`
  color: ${grey};
  font-size: 3rem;
`;

export const NotResults = styled.h1`
  font-size: 3rem;
`