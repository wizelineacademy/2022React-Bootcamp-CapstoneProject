import React from "react";

import Footer from "components/Footer";
import Header from "components/Header";
import { Container, Content } from "./Layout.styled";

export const Layout = (props) => (
  <Container>
    <Header />
    <Content>{props.children}</Content>
    <Footer />
  </Container>
);

export default Layout;
