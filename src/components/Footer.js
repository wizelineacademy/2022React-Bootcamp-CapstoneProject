import React from 'react';
import {
  FooterContainer,
  TitleFooter,
  WrapperFooter,
} from '../styles/Footer.style';

const Footer = (props) => {
  return (
    <div>
      <WrapperFooter>
        <FooterContainer>
          <TitleFooter>
            Ecommerce created during Wizeline’s Academy React Bootcamp
          </TitleFooter>
        </FooterContainer>
      </WrapperFooter>
    </div>
  );
};

export default Footer;
