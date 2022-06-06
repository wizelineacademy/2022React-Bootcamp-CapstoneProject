import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  SearchBar,
  NavBtnLink,
  SearchIcon,
} from "./NavBarElements.js";
import logoImage from "../../Assets/images/logo.png"

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/"><img src={logoImage} height="50px" alt="logo uShop" 
        onClick={()=> console.log("click")}/></NavLink>
        <Bars />
        <NavMenu>
          <SearchBar placeholder="Search..."/>
          <SearchIcon />
        </NavMenu>
        <NavBtn>
          <NavBtnLink onClick={()=> console.log("click")}/>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;
