import styled from "styled-components";

export const StyledContainer = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  padding: 0;
  justify-content: center;
`;

export const ListItem = styled.li`
  margin-right: 10px;
`;

export const Button = styled.button`
  border: 1px solid #ccc;
  color: #7d7d7d;
  padding: 0;
  width: 120px;
  height: 36px;
  margin-right: 4px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #ffaa07d9;
  }

  & span {
    font-size: 18px;
  }
`;

export const NumberButton = styled.button`
  height: 36px;
  width: 36px;
  background-color: white;
  border: 1px solid lightgray;
  cursor: pointer;

  &.active {
    background-color: #ffaa07d9;
  }

  &:hover {
    background-color: #ffaa07d9;
  }
`;
