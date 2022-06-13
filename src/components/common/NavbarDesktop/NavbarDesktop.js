import { NavContainer, LinkNav } from "./styled";
const NavbarDesktop = (props) => {
  return (
    <NavContainer>
      <LinkNav {...props}>home</LinkNav>
    </NavContainer>
  );
};

export default NavbarDesktop;
