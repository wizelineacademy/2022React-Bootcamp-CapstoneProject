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

export default Footer;

// Footer.defaultProps = {
//   text: 'default text',
// }

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};