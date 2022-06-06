import styled from "styled-components";
import colors from "styles/colors";

export const Container = styled.div`
  width: 100%;
`;

export const ListContainer = styled.div`
  column-gap: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, auto));
  row-gap: 16px;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${colors.textPrimary};
  font-size: 1.75rem;
`;
