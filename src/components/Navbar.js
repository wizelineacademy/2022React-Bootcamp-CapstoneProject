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
import { Col, Row } from '../styles/Home.style';

const Navbar = (props) => {
  return (
    <div>
      <NavbarContainer>
        <Row centered>
          <Col lg="2" md="2" sm="2" collapse="xs">
            <Link to="/">
              <Logo src={LogoImg} alt="logoEccomerce" />
            </Link>
          </Col>
          <Col xs="2" collapse="lg" spaced>
            <LogoResp src={LogoResponsive} alt="logoResponsive" />
          </Col>
          <Col lg="8" md="8" sm="5" xs="5">
            <SearchInput placeholder="Buscar ..." disabled={true} />
          </Col>
          <Col lg="1" md="1" sm="3" xs="4">
            <IconCart disabled={true} />
          </Col>
        </Row>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
