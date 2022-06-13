import styled from "@emotion/styled";
import { Button } from "../../../styled-components";

export const ProductsGrid = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: grid;
  grid-gap: 20px;

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
  color: white;
  margin: 18px auto;
  padding: 12px;
`;
