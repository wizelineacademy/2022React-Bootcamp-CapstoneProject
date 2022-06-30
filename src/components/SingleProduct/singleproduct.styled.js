import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: var(--clr-white);
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
    margin: 0 auto;
    padding: 0 0 5rem;
    max-width: var(--max-width);
    align-items: center;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  .specs {
    display: flex;
    flex-direction: column;
    margin: 0 0 0.5rem;
    padding: 0.5rem;
    background-color: var(--clr-grey-9);
    p {
      margin: 0;
      width: 50%;
      color: var(--clr-primary-5);
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: flex-start;
    }
    .price {
      font-size: 1.25rem;
    }

    .specs {
      display: flex;
      flex-direction: row;
    }
  }
`;

export default Wrapper;
