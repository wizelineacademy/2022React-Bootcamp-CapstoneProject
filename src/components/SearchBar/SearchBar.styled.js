import styled from "styled-components";
import colors from "styles/colors";

export const Container = styled.form`
  display: flex;
  padding: 0 16px;
  width: 100%;
`;

export const SearchButton = styled.button`
  background-color: ${colors.secondary};
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  border: none;
  height: 48px;
  padding: 8px;
  width: 48px;
`;

export const SearchImg = styled.img`
  max-height: 20px;
  max-width: 20px;
`;

export const SearchInput = styled.input`
  border: 1px solid ${colors.secondary};
  border-right: none;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  padding: 0 16px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
