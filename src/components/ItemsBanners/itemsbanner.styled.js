import styled from 'styled-components';

export const Wrapper = styled.article`
  width: 100%;
  a {
    position: relative;
    margin: 0 auto;
    display: flex;
  }
  img {
    width: 100%;
    height: auto;
  }
  div {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    width: 100%;
    height: auto;
    margin: 0 auto;

    p {
      margin: 0 auto;
      background-color: var(--clr-grey-5);
      color: var(--clr-white);
      display: flex;
      width: 100%;
      padding: 1rem;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
  }
`;

export default Wrapper;
