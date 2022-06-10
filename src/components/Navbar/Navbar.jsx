import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

import {
  Logo,
  Menu,
  MenuItem,
  NavContainer,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./Navbar.style";

const Navbar = () => {
  return (
    <NavContainer>
      <Logo href="">
        Galtax <span>  Luxury Furniture</span>
      </Logo>
      <Menu>
        <SearchContainer onSubmit={(e) => e.preventDefault()}>

          <SearchInput type={"search"} placeholder="Search..." />
          <SearchIcon icon={faSearch} />
        </SearchContainer>
        <MenuItem href="/">
          <FontAwesomeIcon icon={faCartPlus} />
        </MenuItem>
      </Menu>
    </NavContainer>
  );
};

export default Navbar;
