import React from "react";
import { Wrapper, Row, Column, Link, Title } from "./FooterElements";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{backgroundColor:'#404267',width:'100%'}}>
      <Wrapper>
        <Row>
          <Column>
            <Title>About Us</Title>
            <Link> Story </Link>
            <Link> Clients </Link>
          </Column>
          <Column>
            <Title>Services</Title>
            <Link> Shipping </Link>
            <Link> Refunds </Link>
            <Link> Terms & Sevices </Link>
          </Column>
          <Column>
            <Title>Contact Us</Title>
            <Link> United States </Link>
            <Link> Mexico </Link>
            <Link> Support </Link>
          </Column>
          <Column>
            <Title>Socials</Title>
            <Link> <FaFacebook/> Facebook</Link>
            <Link> <FaInstagram/> Instagram </Link>
            <Link> <FaTwitter /> Twitter </Link>
          </Column>
        </Row>
      </Wrapper>
    </footer>
  );
};

export default Footer;
