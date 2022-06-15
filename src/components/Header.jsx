import React from "react";
import PropTypes from "prop-types";

import { VIEW_PAGE } from "../utils/constants";

import logo from "../assets/images/6192875.png";

const Header = ({ changePage }) => {
  return (
    <header className="header">
      <div
        className="logo"
        onClick={changePage ? () => changePage(VIEW_PAGE.HOME) : null}
      >
        <img src={logo} alt="logo" data-testid="company-logo" />
        <span data-testid="company-name">WZ-shop</span>
      </div>

      <form className="search-form">
        <input type="search" id="search-box" placeholder="search product..." />
        <label htmlFor="search-box" className="bx bx-search">
          {}
        </label>
      </form>

      <div className="icons">
        <a href="/">
          <i className="bx bx-shopping-bag" />
        </a>
      </div>
    </header>
  );
};

Header.propTypes = {
  changePage: PropTypes.func,
};

export default Header;
