import React from "react";
import PropTypes from "prop-types";
import {
  Label,
  Input,
  LabelText,
} from "../styled-components/products.styled.component";

const CategoryInput = ({ label, checked, name, value, onChange, ...props }) => {
  return (
    <Label>
      <Input name={name} checked={checked} value={value} onChange={onChange} {...props} />
      <LabelText>{label}</LabelText>
    </Label>
  );
};

CategoryInput.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CategoryInput;
