import styled from 'styled-components';
import { bluePrince, grey, white, whiteApple, yellowMain } from '../../utils/constant.styles';

export const MainWrapper = styled.main`
  /* display: flex;
  flex-flow: column; */
  margin: 50px auto 0;
  width: 135em;
  color: ${bluePrince};
  
  @media screen and (max-width: 1400px){
    width: 90%;
  }
  
  `;

export const RowItem = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding: .5rem;
  margin: 1rem auto;
  background-color: ${whiteApple};
  border-radius: .5rem;
  font-size: 1.2rem;
`;

export const Image = styled.img`

  width: 6rem;
`;

export const Name = styled.label`
font-weight: 600;
text-align: center;
text-transform: uppercase;
width: 15%;
`;

export const UnitPriceWrapper = styled.div`
text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 10%;
`;

export const UnitPriceTitle = styled.label`
  font-size: 1rem;
`;

export const Price = styled.label`
  color: ${grey};
  font-weight: 600;
`;

export const Amount = styled.label`

`;

export const BinButtonWrapper = styled.button`
  width: 5%;
  cursor: pointer;
  background: none;
  border: none;
  path {
    fill: ${bluePrince};
  }
  &:hover {
    path {
      fill: red;
    }
  }
`;

export const AmountWrapper = styled.div`
  width: 10%;
  display: flex;
  flex-flow: row;
  gap: 1rem;
`;
export const AmountControllerButton = styled.button`
  font-weight: 600;
  font-size: .9rem;
  height: 1.2rem;
  width: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  color: ${white};
  border-radius: 50px;
  background: ${bluePrince};
  &:hover {
    color: ${bluePrince};
    background: ${yellowMain};
  }
`;