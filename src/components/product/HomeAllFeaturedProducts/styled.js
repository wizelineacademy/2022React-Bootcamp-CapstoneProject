import styled from "@emotion/styled";
import { Button } from "../../../styled-components";

export const ProductsGrid = styled.div`
  margin: 40px auto;
  display: grid;
  grid-gap: 20px;
  height: 100%;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ViewAllProducts = styled(Button)`
  margin: 18px auto;
  padding: 12px;

  a {
    color: white;
    text-decoration: none;
  }
`;
