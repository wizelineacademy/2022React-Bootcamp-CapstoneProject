import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
// components
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
  ButtonGo,
  WrapperSearch,
} from "../styled-components";

const MainNavbar = () => {
  const txtSearch = useRef();
  let navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/search?q=${txtSearch.current.value}`, { replace: true });
  };

  return (
    <MainHeader>
      <LayoutNavbar>
        <Toolbar>
          <Wrapper>
            <LogoLink to="/">
              {/* <img src="/static/logo.svg" width="40" height="40" alt="logo/name" /> */}
              <Logo image="/static/logo.svg" />
            </LogoLink>
            <WrapperSearch>
              <Input type="search" placeholder="Search" ref={txtSearch} />
              <ButtonGo onClick={handleSearch}>Go</ButtonGo>
            </WrapperSearch>
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
