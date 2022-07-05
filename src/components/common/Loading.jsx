import React from "react";
import PropTypes from "prop-types";

import logo from "../../assets/images/6192875.png";

const Loading = ({ text, styles }) => {
  return (
    <div className="loading-group" style={styles}>
      <img src={logo} alt="" />
      <span>{text}</span>
    </div>
  );
};

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.object,
};

export default Loading;
