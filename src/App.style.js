import styled from "styled-components";
import { appleGreenBackground, bluePrince, white, yellowMain } from "./utils/constant.styles";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 16rem;
  height: 3rem;
  margin: 3rem auto 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
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