import styled from "styled-components";

export const StyledTile = styled.div`
  width: 15rem;
  border: 1px solid rgb(44 48 56 / 20%);
  box-shadow: 0 3px 6px 0 rgb(44 48 56 / 20%);
  margin: 10px;

  @media screen and (max-width: 450px) {
    width: 10rem;
    border: 1px solid rgb(44 48 56 / 20%);
    box-shadow: 0 3px 6px 0 rgb(44 48 56 / 20%);
    margin: 5px;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 14px;
`;

export const Image = styled.img`
  max-width: 14rem;
  max-height: 14rem;
`;

export const TileHeader = styled.h3`
  height: 60px;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 450px) {
    font-size: 15px;
  }
`;
