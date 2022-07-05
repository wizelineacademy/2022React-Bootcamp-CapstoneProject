import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import logo from "../assets/images/6192875.png";

import CartContext from "../context/Cart/CartContext";
const Header = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>Wz shop</span>
        </div>
      </Link>

      <Formik
        initialValues={{ searchTerm: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.searchTerm) {
            errors.searchTerm = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          navigate(`/search?q=${values.searchTerm}`);
        }}
      >
        <Form className="search-form">
          <Field
            type="search"
            name="searchTerm"
            component="input"
            placeholder="search here..."
          />
          <ErrorMessage name="email" component="div" />
          <button type="submit" className="bx bx-search" />
        </Form>
      </Formik>

      <div className="icons">
        <Link to="/cart" title="Go To Shopping Cart">
          <i className="bx bx-shopping-bag" />
          {cartContext.state.items.length > 0 && (
            <span>
              {cartContext.state.items.length >= 10
                ? "+9"
                : cartContext.state.items.length}{" "}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
