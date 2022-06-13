import styled from "styled-components";

export const ProductListPage = styled.div`
  width: 100%;
  min-height: 42rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  min-width: 25%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Products = styled.div`
  min-width: 75%;
`;
