import styled from "styled-components";

export const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Container = styled.header`
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  ${({ $isSmallDevice }) => ($isSmallDevice ? "flex-direction: column;" : "")}
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
`;

export const SearchBarRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 16px 16px 16px;
  width: 100%;
`;
