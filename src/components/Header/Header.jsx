import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as ShoppingCartIcon } from '../../images/shopping-cart.svg';
import { ReactComponent as SearchIcon } from '../../images/search.svg';
import logo from '../../images/logo.png';

import {
  HeaderMain, Image, Name, InputSearch, ButtonCart, SearchWrapper, SearchButton,
} from './Header.styled';
import { ROUTES } from '../../utils/constants';

function Header() {
  return (
    <HeaderMain isYellow>
    <Link to={ROUTES.home}>
      <Image src={logo} alt="logo" />
    </Link>
      <Name>
        Furny
      </Name>
      <SearchWrapper>
        <InputSearch type="text" placeholder="Search" />
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </SearchWrapper>
      <ButtonCart>
        <ShoppingCartIcon />
      </ButtonCart>
    </HeaderMain>
  );
}

export default Header;
