import styled from "styled-components";
import { bluePrince, darkRed, white } from "../../../utils/constant.styles";

export const CartWrapper = styled.div`
  display: flex;
  flex-flow: row;
  margin: 0 3rem;
  height: 3rem;
  @media screen and (max-width: 800px) {
    margin: 2rem auto 0;
  }
`;

export const ButtonCart = styled.button`
  margin: 0 4% 0;
  outline: none;
  background: none;
  border: none;
  path {
      fill: ${bluePrince};
    }
  &:hover {
    cursor: pointer;
    path {
      fill: ${white};
    }
  }
  & > svg {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

export const ItemCounter = styled.span`
  height: fit-content;
  margin-left: -2.5rem; 
  background-color: red;
  color: ${white};
  font-weight: 600;
  padding: .2rem;
  border-radius: 50px;
  text-align: center;
`;