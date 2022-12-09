import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import {
  FooterContainer,
  FooterGridContainer,
  FooterGridItem,
  FooterGridItemDescription,
  FooterWrapper,
} from "../styled-components";

const Footer = () => {
  return (
    <footer>
      <div style={{ backgroundColor: "#0c0e30" }}>
        <FooterContainer>
          <FooterWrapper>
            <FooterGridContainer>
              <FooterGridItem>
                <Link to="/">
                  <Logo image="/static/logo-light.svg" />
                </Link>
                <FooterGridItemDescription>
                  Ecommerce created during Wizeline’s Academy React Bootcamp.
                </FooterGridItemDescription>
              </FooterGridItem>
              <FooterGridItem />
              <FooterGridItem />
              <FooterGridItem />
            </FooterGridContainer>
          </FooterWrapper>
        </FooterContainer>
      </div>
    </footer>
  );
};

export default Footer;
