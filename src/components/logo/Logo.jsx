import React from 'react';
import PropTypes from "prop-types";

import logo from'./logo.png';

const Logo = ({width, height}) => (
	<img src={logo} alt="capstone" width={width} height={height} />
);

Logo.propTypes = {
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
}

export default Logo;
