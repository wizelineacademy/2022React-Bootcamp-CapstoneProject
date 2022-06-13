import styled from "styled-components";

export const FiltersWrapper = styled.div`
  width: 100%;
  min-height: 270px;
  display: flex;
  flex-direction: column;

  & h3 {
    font-size: 30px;
  }
`;

export const FiltersContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  margin-right: 20px;

  &:hover {
    background-color: #ffaa07d9;
    color: white;
  }
`;

export const Label = styled.label`
  width: 100%;
  text-align: start;
  font-size: 24px;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  width: 25px;
  height: 25px;
`;
