import styled from 'styled-components';
import * as colors from './Colors.style';

export const SSidebar = styled.div`
  height: 100%;
  padding: 24px;
  border-right: 1px solid ${colors.colors.lightGray};
  position: relative;
`;

export const Layout = styled.div`
  display: flex;
`;

export const ProductContainer = styled.div`
  padding: 16px;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: ${colors.colors.lightGray};
  width: 100%;
  margin: 24px 0;
`;

export const LogoSBar = styled.div`
  width: 60px;

  img {
    max-width: 100%;
    height: auto;
  }
  cursor: pointer;

  margin-bottom: 24px;
`;

export const SLinkContainer = styled.div`
  background: ${({ isActive }) => !isActive && `transparent`};
  border-radius: 10px;
  margin: 8px 0;

  &:hover {
    border: 1px solid ${colors.colors.lightGray};
  }
`;

export const SSearch = styled.div`
  border: 1px solid white;
  width: 100%;

  input {
    padding: 7px 8px;
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 13px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
  }
`;

export const SSearchIcon = styled.i`
  padding: 14px 16px;
  border: 1px solid ${colors.colors.lightGray};
  border-radius: 10px;
  display: flex;
  cursor: pointer;
  background-color: white;
  img {
    font-size: 20px;
    color: ${colors.colors.lightGray};
  }
`;

export const SLink = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: 6px 0;
`;

export const SLinkIcon = styled.div`
  padding: 8px 16px;
  display: flex;
  width: 100%;

  img {
    width: 30px;
  }
`;

export const SLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
  color: ${colors.colors.inputGray};
`;

export const SidebarButton = styled.button`
  position: absolute;
  top: 48px;
  right: ${({ isOpen }) => (isOpen ? `-16px` : `-15px`)};
  width: 32px;
  height: 32px;
  background-color: white;
  border: 1px solid ${colors.colors.hoverInput};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const SFooter = styled.div`
  padding: 7px 6px;

  p {
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    color: black;
  }
`;
