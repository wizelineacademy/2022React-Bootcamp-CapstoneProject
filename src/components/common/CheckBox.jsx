import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const CheckBox = (props) => {
  const inputRef = useRef(null);
  const labelRef = useRef(null);

  const onChange = () => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
  };

  useEffect(() => {
    props.checked && labelRef.current.classList.toggle("active");
  }, [props.checked]);

  return (
    <label className="checkbox" ref={labelRef}>
      <input
        type="checkbox"
        ref={inputRef}
        onChange={onChange}
        checked={props.checked}
      />
      <span className="checkbox_checkmark">
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
