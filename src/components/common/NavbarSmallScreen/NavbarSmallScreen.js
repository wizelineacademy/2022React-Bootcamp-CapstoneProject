import { Cross, Home } from "../../icons";
import { SearchForm } from "./../../ui";
import { MenuMovil, NavMobile, LinkNav } from "./styled";

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
