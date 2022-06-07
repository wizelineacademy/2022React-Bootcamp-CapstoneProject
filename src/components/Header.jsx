import React from "react";

import logo from "../assets/images/6192875.png";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={logo} alt="logo" data-testid="company-logo" />
        <span data-testid="company-name">WZ-shop</span>
      </a>

      <form className="search-form">
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box" className="bx bx-search">
          {}
        </label>
      </form>

      <div className="icons">
        <a href="/">
          <i className="bx bx-shopping-bag" />
          <span>0</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
