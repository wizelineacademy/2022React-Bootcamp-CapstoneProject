import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

Logo.propTypes = {
  image: PropTypes.string,
};

export default function Logo({ image }) {
  return <img id="logo" src={image} alt="logo/name" width="40" height="40" />;
}
