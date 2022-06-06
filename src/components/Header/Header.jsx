import Cart from "components/Cart";
import Logo from "components/Logo";
import React, { Fragment } from "react";
import screenSizes from "styles/screenSizes";
import useGetScreenWidth from "utils/hooks/useGetScreenWidth";
import SearchInput from "../SearchBar/SearchBar";
import { ButtonsRow, Container, Content, SearchBarRow } from "./Header.styled";

const Header = () => {
  const screenWidth = useGetScreenWidth();
  const isSmallDevice = screenWidth <= screenSizes.tablet;

  const handleSearch = (inputValue) => {
    // TODO: add search functionality
    console.log(inputValue);
  };

  console.log(isSmallDevice);

  return (
    <Container>
      <Content $isSmallDevice={isSmallDevice}>
        {isSmallDevice ? (
          <ButtonsRow>
            <Logo />
            <Cart />
          </ButtonsRow>
        ) : (
          <Logo />
        )}
        {isSmallDevice ? (
          <SearchBarRow>
            <SearchInput
              placeholder="Search any product"
              onSearch={handleSearch}
            />
          </SearchBarRow>
        ) : (
          <Fragment>
            <SearchInput
              placeholder="Search any product"
              onSearch={handleSearch}
            />
            <Cart />
          </Fragment>
        )}
      </Content>
    </Container>
  );
};

export default Header;
