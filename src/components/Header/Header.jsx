import React from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../images/shopping-cart.svg';
import logo from '../../images/logo.png';

import {
  HeaderMain, Image, Name, Search, ButtonCart,
} from './Header.styled';

function Header() {
  return (
    <HeaderMain isYellow>
      <Image src={logo} alt="logo" />
      <Name>
        Furny
      </Name>
      <Search type="text" placeholder="Search" />
      <ButtonCart>
        <ShoppingCartIcon />
      </ButtonCart>
    </HeaderMain>
  );
}

export default Header;