import React from 'react';
import {
  FooterContainer,
  FooterTitle,
  FooterWrapper,
} from '../styles/Footer.style';

const Footer = (props) => {
  return (
    <div>
      <FooterWrapper>
        <FooterContainer>
          <FooterTitle>
            Ecommerce created during Wizeline’s Academy React Bootcamp
          </FooterTitle>
        </FooterContainer>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
