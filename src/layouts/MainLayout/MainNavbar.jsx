import React from "react";
import Logo from "../../components/Logo";
import {
  MainHeader,
  LayoutNavbar,
  Toolbar,
  Wrapper,
  LogoLink,
  Input,
  RightBox,
  Icon,
} from "../styled-components/header.styled.component";

const MainNavbar = ({ setNavigation }) => {
  const handleClickNav = () => {
    setNavigation(0);
  };

  return (
    <MainHeader>
      <LayoutNavbar>
        <Toolbar>
          <Wrapper>
            <LogoLink onClick={handleClickNav}>
              {/* <img src="/static/logo.svg" width="40" height="40" alt="logo/name" /> */}
              <Logo image="/static/logo.svg" />
            </LogoLink>
            <Input type="text" placeholder="Search" />
            <RightBox>
              <Icon viewBox="0 0 20 20" />
            </RightBox>
          </Wrapper>
        </Toolbar>
      </LayoutNavbar>
    </MainHeader>
  );
};

export default MainNavbar;
