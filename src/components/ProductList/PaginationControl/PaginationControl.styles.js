import styled from "styled-components";
import { bluePrince, whiteApple, yellowMain } from "../../../utils/constant.styles";

export const PaginationMain = styled.div`
  margin: 2rem auto;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  background: linear-gradient(.2zturn, transparent, ${whiteApple}, transparent);
  width: 25%;
  font-size: 1.2rem;
  
  & a:nth-child(2) {
    text-align: center;
    background-color: ${yellowMain};
    border-radius: 50px;
    width: 1.5rem;
  }

  @media screen and (max-width: 1000px){
    width: 40%;
  }

  @media screen and (max-width: 800px){
    width: 60%;
  }

  @media screen and (max-width: 500px){
    width: 80%;
  }
  `;

export const Arrow = styled.a`
  color: ${bluePrince};
  text-decoration: none;
`;

export const PaginationItem = styled.a`
  color: ${bluePrince};
  text-decoration: none;
`;
