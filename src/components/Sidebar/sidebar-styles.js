import styled from "styled-components";

export const FiltersWrapper = styled.div`
  width: 100%;
  min-height: 270px;
  display: flex;
  flex-direction: column;
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
`;

export const Label = styled.label`
  width: 100%;
  text-align: start;
`;
