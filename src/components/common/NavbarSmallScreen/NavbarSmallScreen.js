import styled from "@emotion/styled";
import { Cross, Home } from "../../icons";
import { SearchForm } from "./../../ui";

const MenuMovil = styled.div`
  position: fixed;
  z-index: 30;
  background-color: #a1c5cce6;
  color: white;
  left: 0;
  top: 0;
  width: 100vw;
  opacity: 0;
  height: 100%;
  transform: scaleY(0);
  transform-origin: top;
  transition: all ease-in-out 0.4s;

  &.menu-active {
    opacity: 1;
    transform: scaleY(1);
  }

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
  display: flex;
  font-size: 22px;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 0.3s;
  &:hover {
    border-bottom: 3px solid black;
  }
`;

const NavbarSmallScreen = ({ handleMenuActive, menuActive }) => {
  const handleActiveClass = () => {
    handleMenuActive();
  };

  return (
    <MenuMovil className={`${menuActive ? "menu-active" : ""}`}>
      <Cross width="50px" height="50px" onClick={handleActiveClass} />
      <NavMobile>
        <LinkNav href="/">
          <Home fill="#FFF" />
          Home
        </LinkNav>
        <SearchForm />
      </NavMobile>
    </MenuMovil>
  );
};

export default NavbarSmallScreen;
