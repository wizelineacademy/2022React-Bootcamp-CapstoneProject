import PropTypes from "prop-types";
import { Message } from "./styled";

const ErrorMessage = ({ message }) => {
  return <Message>{message}</Message>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
