import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: var(--clr-white);
  display: grid;
  row-gap: 3rem;

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
    margin: 0 auto;
    padding: 0 0 5rem;
    max-width: var(--max-width);
    align-items: center;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr;
      align-items: flex-start;
    }

    img {
      width: 300px;
      height: 200px;
      object-fit: cover;
      border-radius: var(--radius);
      margin-bottom: 1rem;
    }

    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default Wrapper;
