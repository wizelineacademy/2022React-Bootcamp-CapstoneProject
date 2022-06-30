import { NavbarDesktop } from "../../common/NavbarDesktop";
import { Logo, MenuButton, CartSidebarView, SearchForm } from "../../ui";
import { Heading, ActionsContainer, NavDeskContainer } from "./styled";

const Header = () => {
  return (
    <Heading>
      <Logo />
      <ActionsContainer>
        <NavDeskContainer>
          <NavbarDesktop />
          <SearchForm />
        </NavDeskContainer>
        <MenuButton />
        <CartSidebarView />
      </ActionsContainer>
    </Heading>
  );
};

export default Header;
