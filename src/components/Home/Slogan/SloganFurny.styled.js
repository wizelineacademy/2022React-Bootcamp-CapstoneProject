import styled from 'styled-components';
import { bluePrince } from '../../../utils/constant.styles';

const SloganFurny = styled.div`
  margin-top: 0;
  background: rgba(250,250,250,.4);
  font-size: 2.2rem;
  text-align: center;
  color: ${bluePrince};

  & h1 {
    font-family: 'Tangerine', cursive;
  } 
  
  @media screen and (max-width: 700px) {
    font-size: 1.7rem;
  }
`;

export default SloganFurny;
