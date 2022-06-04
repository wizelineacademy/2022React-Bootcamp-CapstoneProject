import styled from "@emotion/styled";
import { Logo } from "../../ui";
import { MenuButton, CartSidebarView, SearchForm } from "./../../ui";

const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  transition: all ease-in-out 0.3s;

  @media (min-width: 768px) {
    padding: 20px 50px;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const NavDeskContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Header = () => {
  return (
    <Heading>
      <Logo />
      <ActionsContainer>
        <NavDeskContainer>
          <SearchForm />
        </NavDeskContainer>
        <MenuButton />
        <CartSidebarView />
      </ActionsContainer>
    </Heading>
  );
};

export default Header;
