import React from "react";
import PropTypes from "prop-types";
import {
  Label,
  Input,
  LabelText,
} from "../styled-components/products.styled.component";

const CategoryInput = ({ label, checked, onChange, name }) => {
  return (
    <Label>
      <Input name={name} checked={checked !== undefined ? checked : false} onChange={onChange} />
      <LabelText>{label}</LabelText>
    </Label>
  );
};

CategoryInput.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default CategoryInput;
