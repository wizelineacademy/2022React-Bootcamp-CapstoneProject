import { NavContainer, LinkNav } from "./styled";
const NavbarDesktop = (props) => {
  return (
    <NavContainer>
      <LinkNav to="/home" {...props}>
        home
      </LinkNav>
    </NavContainer>
  );
};

export default NavbarDesktop;
