import PropTypes from "prop-types";

export const types = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  alt: PropTypes.string,
  urlImage: PropTypes.string,
  slugs: PropTypes.array,
};
