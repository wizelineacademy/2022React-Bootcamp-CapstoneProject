import styled from 'styled-components';
import { device } from '../styles/mediaquery';

export const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-grey-1);
  text-align: center;
  span {
    color: var(--clr-white);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media only screen and ${device.laptop} {
    flex-direction: row;
  }
`
