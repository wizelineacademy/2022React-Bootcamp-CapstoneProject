import styled from "styled-components";

export const StyledBanner = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  width: 100%;
  height: 100%;

  &.show_banner {
    display: block;
  }

  &.hide_banner {
    display: none;
  }

  @media screen and (max-width: 800px) {
    &.show_banner {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  }
`;

export const FixedMessage = styled.div`
  position: sticky;
  bottom: 35%;
  background-color: #ffaa07d9;
  width: 35rem;
  left: 60%;
  min-height: 15rem;
  text-align: center;

  @media screen and (max-width: 1600px) {
    bottom: 35%;
    width: 30rem;
    left: 60%;
  }

  @media screen and (max-width: 1300px) {
    bottom: 30%;
    width: 25rem;
    left: 50%;
  }

  @media screen and (max-width: 800px) {
    position: unset;
    width: 100%;
    height: 100%;
  }
`;
