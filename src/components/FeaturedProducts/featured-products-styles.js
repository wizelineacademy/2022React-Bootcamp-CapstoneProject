import styled from "styled-components";

export const StyledFeaturedProducts = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
  width: 99%;

  & .products_container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    height: 28rem;
    margin-bottom: 7rem;
  }

  & .product_tile {
    max-width: 20rem;
    max-height: 20rem;
  }

  @media screen and (max-width: 800px) {
    & .products_container button {
      transform: translateY(10%) !important;
    }
  }
`;

export const Products = styled.div`
  display: flex;
  overflow: hidden;
  height: 100%;
`;
