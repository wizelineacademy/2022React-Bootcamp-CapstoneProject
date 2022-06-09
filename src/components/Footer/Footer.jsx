import React from 'react';
import PropTypes from 'prop-types';
import FooterMain from './FooterMain.styled'

function Footer({ text }) {
  return (
    <FooterMain>
      {text}
    </FooterMain>
  );
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Footer;
