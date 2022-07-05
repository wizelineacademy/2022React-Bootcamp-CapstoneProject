import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const bg = props.backgroundColor ? `bg-${props.backgroundColor}` : "bg-main";

  const size = props.size ? `btn-${props.size}` : "";

  const buttonType = props.buttonType ? props.buttonType : "button";
  const isDisabled = props.isDisabled ? props.isDisable : "";
  return (
    <button
      disabled={isDisabled}
      type={buttonType}
      className={`btn ${bg} ${size} `}
      onClick={props.handler ? () => props.handler() : null}
    >
      <span className="txt">{props.children}</span>
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  handler: PropTypes.func,
  buttonType: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
