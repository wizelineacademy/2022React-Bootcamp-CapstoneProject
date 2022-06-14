import React from "react";
import PropTypes from "prop-types";

import logo from "../../assets/images/6192875.png";

const Loading = ({ text }) => {
  return (
    <div className="loading">
      <img src={logo} alt="" />
      <span>{text}</span>
    </div>
  );
};

Loading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Loading;
