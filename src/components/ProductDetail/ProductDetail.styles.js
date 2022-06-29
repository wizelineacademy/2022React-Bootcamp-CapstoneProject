import styled from 'styled-components';
import {
  appleGreenBackground,
  bluePrince,
  darkRed,
  grey,
  white,
  whiteApple, 
  yellowMain} from '../../utils/constant.styles';

export const DetailMain = styled.main`
  width: 135em;
  height: fit-content;
  margin: 3rem auto;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  border-radius: .5rem;
  background-color: ${whiteApple};

  @media screen and (max-width: 1400px){
    width: 90%;
  }
  
  @media screen and (max-width: 800px){
    height: fit-content;
    flex-flow: row wrap;
    justify-content: space-between;
    padding-bottom: 2rem;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 3.5rem;
  background-color: ${whiteApple};
  padding: 1.5rem;
  border-radius: .5rem;
  box-shadow:  0 5px 20px ${appleGreenBackground};    
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  gap: 1.5rem;
  /* justify-content: space-between; */
  color: ${bluePrince};
  width: 100%;
  margin: 2rem 4rem;
  padding: 2rem;
  border-radius: .5rem;
`;

export const Title = styled.label`
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Price = styled.label`
  font-size: 3rem;
  color: ${grey};
`;

export const Sku = styled.label`
  font-size: 1.2rem;
  color: ${darkRed};

  span {
    color: ${grey};
  }
`;

export const Category = styled.label`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 400;
  margin-top: 0;
`;

export const Tags = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin-top: 2rem;
  /* line-height: 0; */
  
  width: 100%;
  path {
      fill: ${bluePrince};
    }
`;

export const TagGroup = styled.div `
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: .5rem;
`;

export const TagName = styled.label`
  font-size: 1.1rem;
`;

export const Description = styled.p`
  text-align: justify;
  font-size: 1.4rem;
`;

export const AmountWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: .5rem;
`;

export const Input = styled.input.attrs({ 
  type: 'number',
  min:'0',
})`
  color: ${bluePrince};
  width: 4rem;
  height: 1.5rem;
  font-size: 1.2rem;
  border-radius: .3rem;
  text-indent: .3rem;
  border: 2px ${bluePrince} solid;
`
export const Stock = styled.span`
  font-size: 1.3rem;
`;

export const AddToCartButton = styled.button.attrs({ 
  type: 'submit',
})`
  cursor: pointer;
  font-size: 1.1rem;
  border: none;
  border-radius: .3rem;
  width: 10rem;
  height: 2.6rem;
  color: ${white};
  font-weight: 600;
  background: ${bluePrince};
  box-shadow:  0 5px 20px ${appleGreenBackground};  

  &:hover {
    background: ${yellowMain};
    color: ${bluePrince};
  }
`;
export const Table = styled.table`
  margin: .5rem auto;
`;

export const TBody = styled.tbody`
  text-align: left;
  font-size: .8rem;
  width: 25rem;
  td {
    text-indent: 1rem;
  }
`;