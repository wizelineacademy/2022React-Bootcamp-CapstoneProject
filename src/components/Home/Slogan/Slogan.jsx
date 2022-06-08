import React from 'react';
import PropTypes from 'prop-types';
import SloganFurny from './SloganFurny.styled';

function Slogan({ text }) {
  return (
    <SloganFurny>
      <h1>{text}</h1>
    </SloganFurny>
  );
}

Slogan.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Slogan;
