import React from "react";
import PropTypes from "prop-types";

const NotFound = ({ text }) => {
  return (
    <section className="not-found">
      <span>{text}</span>
    </section>
  );
};

NotFound.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NotFound;
