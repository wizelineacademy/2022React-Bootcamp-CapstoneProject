import styled from 'styled-components';
import { device } from '../../styles/mediaquery';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  justify-content: flex-end;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 3rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
  @media only screen and ${device.laptop} {
    flex-direction: row;

    .cart-btn {
      width: 175px;
      justify-content: flex-end;
    }

    .cart-value {
      position: absolute;
      top: -10px;
      right: -16px;
    }
  }
`;

export default Wrapper;
