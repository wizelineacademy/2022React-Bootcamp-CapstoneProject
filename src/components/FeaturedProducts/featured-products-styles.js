import styled from "styled-components";

export const StyledFeaturedProducts = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: scroll;
  width: 99%;

  & h2 {
    width: 100%;
  }

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

  @media screen and (max-width: 1024px) {
    & .products_container button {
      display: none;
    }
  }
`;

export const Products = styled.div`
  display: flex;
  overflow: hidden;
  height: 100%;
`;
