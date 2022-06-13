import styled from "styled-components";

export const FiltersWrapper = styled.div`
  width: 100%;
  min-height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h3 {
    font-size: 30px;
    margin: 0;
  }
`;

export const FiltersContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    width: 100%;
    height: 11rem;
    align-items: center;
    overflow: hidden;
    margin: 0;
    justify-content: center;
    flex-wrap: wrap;
  }
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

  @media screen and (max-width: 1024px) {
    height: 6rem;
    margin-right: 6px;
  }
`;

export const Label = styled.label`
  width: 100%;
  text-align: start;
  font-size: 24px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 620px) {
    font-size: 17px;
  }
`;

export const StyledInput = styled.input`
  width: 25px;
  height: 25px;
`;
