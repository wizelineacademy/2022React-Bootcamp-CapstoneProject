import styled from 'styled-components';
import { appleGreenBackground,
  bluePrince,
  white,
  yellowMain } from '../../utils/constant.styles';

export const AddToCart = styled.button.attrs({ 
  type: 'submit',
})`
  cursor: pointer;
  font-size: ${({smaller}) => smaller ? '.6rem' : '1.1rem'};
  border: none;
  border-radius: .3rem;
  width: ${({smaller}) => smaller ? '5.3rem' : '10rem'};
  height: ${({smaller}) => smaller ? '2rem' : '2.6rem'};
  color: ${white};
  font-weight: 600;
  background: ${bluePrince};
  box-shadow:  0 5px 20px ${appleGreenBackground};  

  &:hover {
    background: ${yellowMain};
    color: ${bluePrince};
  }
`;
