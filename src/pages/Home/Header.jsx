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
} from "./styled-components/header.styled.component";

const Header = () => {
  return (
    <MainHeader>
      <LayoutNavbar>
        <Toolbar>
          <Wrapper>
            <LogoLink href="/">
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

export default Header;
