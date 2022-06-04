import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Cross } from "../../icons";
import { SearchForm } from "./../../ui";

const rotate = keyframes`
  from {
  opacity: 0;
  transform: scaleY(0);
  }

  to {
    opacity: 1
    transform: scaleY(1);
  }
`;

const MenuMovil = styled.div`
  position: absolute;
  background-color: #a1c5cce6;
  color: white;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  transform-origin: top;
  animation: ${rotate} 0.3s linear 1;
  transition: all ease-in-out 0.2s;

  svg {
    cursor: pointer;
    margin: 10px 12px;
    transition: all ease-in-out 0.4s;
    &:hover {
      transform: rotate(90deg) scale(1.2);
    }
  }
`;

const NavMobile = styled.div`
  display: flex;
  text-align: center;
  padding: 20px 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const LinkNav = styled.a`
  width: 70%;
  text-decoration: none;
  padding: 10px;
  font-weight: 400;
  color: white;
  border-bottom: 3px solid transparent;
  transition: all ease-in-out 0.3s;
  &:hover {
    border-bottom: 3px solid black;
  }
`;

const NavbarSmallScreen = ({ handleMenuActive }) => {
  return (
    <MenuMovil>
      <Cross width="50px" height="50px" onClick={handleMenuActive} />
      <NavMobile>
        <LinkNav href="/">Home</LinkNav>
        <SearchForm />
      </NavMobile>
    </MenuMovil>
  );
};

export default NavbarSmallScreen;
