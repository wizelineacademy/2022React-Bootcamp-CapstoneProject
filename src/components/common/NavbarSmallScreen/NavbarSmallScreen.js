import { Cross, Home } from "../../icons";
import { SearchForm } from "./../../ui";
import { MenuMovil, NavMobile, LinkNav } from "./styled";
import { useContext } from "react";
import { NavbarContext } from "./../../../context";

const NavbarSmallScreen = () => {
  const { active, setVisible } = useContext(NavbarContext);

  return (
    <MenuMovil className={`${active ? "menu-active" : ""}`}>
      <Cross width="50px" height="50px" onClick={() => setVisible(!active)} />
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
