import styled from "styled-components";
import { bluePrince } from "../../utils/constant.styles";

export const AsideBar = styled.aside`
  width: 135em;
  margin: 2.5rem auto ;
  padding: 0.5rem;
`;

export const AsideItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  height: 2.5rem;
  color: ${bluePrince};
  text-align: center;
  font-size: 1.2rem;
  padding: 1rem;
  border: 1px solid white;
  &:not(:last-child) {
    border-bottom: none;
  }
  
`;