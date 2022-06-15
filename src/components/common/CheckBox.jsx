import React, { useRef } from "react";
import PropTypes from "prop-types";

const CheckBox = (props) => {
  const inputRef = useRef(null);
  const labelRef = useRef(null);

  const onChange = ({ label, onChange, checked }) => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
    labelRef.current.classList.toggle("-active");
  };

  return (
    <label className="checkbox" ref={labelRef}>
      <input
        type="checkbox"
        ref={inputRef}
        onChange={onChange}
        checked={props.checked}
      />
      <span className="checkbox-checkmark">
        <i className="bx bx-check" />
      </span>
      {props.label}
    </label>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CheckBox;
