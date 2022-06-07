import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const bg = props.backgroundColor ? `bg-${props.backgroundColor}` : "bg-main";

  const size = props.size ? `btn-${props.size}` : "";

  return (
    <button
      className={`btn ${bg} ${size} `}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      <span className="txt">{props.children}</span>
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  onclick: PropTypes.func,
};

export default Button;
