import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: var(--max-width);
  background-color: var(--clr-grey-10);
  padding: 3rem 1rem;
  border-radius: var(--radius);

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    padding: 0;

    li {
      margin: 0 0.5rem;
      padding: 0;
    }

    a {
      display: flex;
      background-color: var(--clr-primary-7);
      border-radius: 50%;
      width: 25px;
      height: 25px;
      align-items: center;
      justify-content: center;
      transition: var(--transition);

      &:hover {
        background-color: var(--clr-primary-1);
      }

      &.active {
        background-color: var(--clr-primary-1);
      }
    }

    span {
      font-size: 1rem;
      color: var(--clr-white);
      padding: 12px;
    }
  }

  a {
    color: var(--clr-primary-7);
    width: 25px;
    height: 25px;
    font-size: 25px;
    line-height: 25px;
    transition: var(--transition);

    &:hover {
      color: var(--clr-primary-1);
    }
  }
`;

export default Wrapper;
