import React from "react";
import PropTypes from "prop-types";

const CardDepartment = ({ departmentName, imageUrl, imageAlt }) => {
  return (
    <div className="card-department">
      <h1>{departmentName}</h1>
      <img src={imageUrl} alt={imageAlt} />
    </div>
  );
};

CardDepartment.propTypes = {
  departmentName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
};

export default CardDepartment;
