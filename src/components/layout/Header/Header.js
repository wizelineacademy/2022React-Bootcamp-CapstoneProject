import { NavbarDesktop } from "../../common/NavbarDesktop";
import { Logo, MenuButton, CartSidebarView, SearchForm } from "../../ui";
import { Heading, ActionsContainer, NavDeskContainer } from "./styled";

const Header = ({ handleNavigate }) => {
  return (
    <Heading>
      <Logo onClick={() => handleNavigate(true)} />
      <ActionsContainer>
        <NavDeskContainer>
          <NavbarDesktop onClick={() => handleNavigate(true)} />
          <SearchForm />
        </NavDeskContainer>
        <MenuButton />
        <CartSidebarView />
      </ActionsContainer>
    </Heading>
  );
};

export default Header;
