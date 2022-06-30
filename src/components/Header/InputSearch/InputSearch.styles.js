import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { bluePrince } from '../../../utils/constant.styles';

export const SearchWrapper = styled.div`
  height: 2.3rem;
  display: flex;
  flex-flow: row;
  align-items: center;
  border-radius: .3rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  path {
    fill: ${bluePrince};
  }
  
  @media screen and (max-width: 800px) {
    margin: 2rem auto 0;
    width: 50%;
  }
  `;

export const SearchButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: -2.5rem;
  border: none;
  cursor: pointer;
  background: transparent;
`;

export const InputSearch = styled.input`
  width: 20rem;
  height: 2.3rem;
  text-indent: .5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: .3rem;
  &:focus {
    outline-color: ${bluePrince};
  }
`;
