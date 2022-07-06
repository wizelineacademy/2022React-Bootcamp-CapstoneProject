import PropTypes from "prop-types";

export const types = {
  title: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  alt: PropTypes.string,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
