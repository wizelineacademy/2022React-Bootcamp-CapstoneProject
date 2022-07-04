import styled from "@emotion/styled";

export const GridContainer = styled.div`
  margin: 25px auto;
  display: grid;
  transition: 0.4s;
  grid-gap: 10px;
  padding: 20px 10px;

  @media (min-width: 588px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
