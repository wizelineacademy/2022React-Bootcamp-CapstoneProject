import styled from 'styled-components';

export const MainHeader = styled.header`
  box-shadow: rgba(58, 53, 65, 0.42) 0px 4px 8px -4px;
  background-image: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  position: sticky;
  z-index: 1100;
  top: 0px;
  left: auto;
  right: 0px;
  -moz-box-align: center;
  align-items: center;
  color: rgba(58, 53, 65, 0.87);
  -moz-box-pack: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.85);
  transition: border-bottom 0.2s ease-in-out 0s,
    backdrop-filter 0.25s ease-in-out 0s, box-shadow 0.25s ease-in-out 0s;
`;

export const LayoutNavbar = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(58, 53, 65, 0.12);
  color: rgba(58, 53, 65, 0.87);
`;

export const Toolbar = styled.div`
  max-width: 1440px;
  position: relative;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  width: 100%;
  padding: 0rem 1.5rem !important;
  margin-left: auto;
  margin-right: auto;
  min-height: 63px !important;
  color: rgba(58, 53, 65, 0.87);
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: justify;
  justify-content: space-between;
`;

export const LogoLink = styled.a`
  display: flex;
  -moz-box-align: center;
  align-items: center;
  text-decoration: none;
  margin-right: 2rem;
`;

export const Input = styled.input`
  padding: 0.8rem;
  margin: 0.8rem;
  background: #f2f2f2;
  border: 0px solid transparent;
  border-radius: 3px;
`;

export const RightBox = styled.div`
    display: flex;
    -moz-box-align: center;
    align-items: center;
`;

export const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 22px;
  height: 22px;

  :hover & {
    fill: rebeccapurple;
  }
`;