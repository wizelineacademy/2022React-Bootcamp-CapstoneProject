import styled from "@emotion/styled";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const LinkNav = styled.a`
  position: relative;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    color: var(--primary-green-hover);
  }

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 4px;
    border-radius: 20px;
    left: 0;
    top: 50px;
    background-color: var(--primary-green);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform linear 0.3s;
  }

  &:hover:after {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

const NavbarDesktop = () => {
  return (
    <NavContainer>
      <LinkNav>home</LinkNav>
    </NavContainer>
  );
};

export default NavbarDesktop;
