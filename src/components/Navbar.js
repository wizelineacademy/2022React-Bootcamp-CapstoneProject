import React from 'react';
import {
  ContainerCol1,
  ContainerCol2,
  ContainerCol3,
  Logo,
  NavbarContainer,
  NavbarInnerContainer,
  SearchInput,
  IconCart,
  LogoResp,
} from '../styles/Navbar.style';

import LogoImg from '../assets/logoHorizontal.png';
import LogoResponsive from '../assets/logo-responsive.png';

import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div>
      <NavbarContainer>
        <NavbarInnerContainer>
          <ContainerCol1>
            <Link to="/">
              <Logo src={LogoImg} alt="logoEccomerce" />
            </Link>
            <LogoResp src={LogoResponsive} alt="logoResponsive" />
          </ContainerCol1>
          <ContainerCol2>
            <SearchInput placeholder="Buscar ..." disabled={true} />
          </ContainerCol2>
          <ContainerCol3>
            <IconCart disabled={true} />
          </ContainerCol3>
        </NavbarInnerContainer>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
