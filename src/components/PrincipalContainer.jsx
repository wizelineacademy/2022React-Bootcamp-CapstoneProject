import React from "react";
import PropTypes from "prop-types";

const PrincipalContainer = ({ title, children }) => {
  document.title = `Wz - ${title}`;
  return <>{children}</>;
};

PrincipalContainer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PrincipalContainer;
