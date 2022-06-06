import React from "react";
import {
  Container,
  SearchButton,
  SearchImg,
  SearchInput,
} from "./SearchBar.styled";
import searchIcon from "icons/searchIcon.svg";
import PropTypes from "prop-types";

const SearchBar = ({ placeholder = "Search", onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target.elements[0];
    onSearch(input.value);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <SearchInput placeholder={placeholder} />
      <SearchButton type="submit">
        <SearchImg alt="search" src={searchIcon} />
      </SearchButton>
    </Container>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
