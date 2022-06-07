import React from "react";
import Logo from "../../components/Logo";
import {
  Container,
  FooterGridContainer,
  FooterGridItem,
  FooterGridItemDescription,
  Wrapper,
} from "../styled-components/footer.styled.component";

const Footer = () => {
  return (
    <footer>
      <div style={{ backgroundColor: "#0c0e30" }}>
        <Container>
          <Wrapper>
            <FooterGridContainer>
              <FooterGridItem>
                <a href="/">
                  <Logo image="/static/logo-light.svg" />
                </a>
                <FooterGridItemDescription>
                  Ecommerce created during Wizeline’s Academy React Bootcamp.
                </FooterGridItemDescription>
              </FooterGridItem>
              <FooterGridItem />
              <FooterGridItem />
              <FooterGridItem />
            </FooterGridContainer>
          </Wrapper>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
