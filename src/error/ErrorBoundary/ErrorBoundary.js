import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ErrorMessage = styled.div`
  text-align: center;
  font-size: 30px;
  margin-top: 300px;
`;

const LinkHome = styled(Link)`
  text-align: center;
  margin-top: 20px;
  color: var(--primary-green);
`;

const ErrorComponent = () => {
  return (
    <>
      <ErrorMessage>{`Something went wrong :(`}</ErrorMessage>
      <LinkHome to="/">Go Home</LinkHome>
    </>
  );
};

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: { message: "", stack: "" },
    info: { componentStack: "" },
  };

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError, error, info } = this.state;
    console.log(error, info);
    const { children } = this.props;

    return hasError ? <ErrorComponent /> : children;
  }
}

export default ErrorBoundary;
