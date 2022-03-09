import React from "react";


export const NavBar = () => {
  return (
    <div className="topnav">
      <a className="active" href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <div className="search-container">
        <form action="/">
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit"><i className="fa fa-shopping-cart"></i></button>
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
    </div>
  );
};