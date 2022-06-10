import React from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../images/shopping-cart.svg';
import logo from '../../images/logo.png';

import {
  HeaderMain, Image, Name, InputSearch, ButtonCart,
} from './Header.styled';

function Header({ handleClick }) {
  return (
    <HeaderMain isYellow>
      <Image src={logo} alt="logo" onClick={handleClick} />
      <Name>
        Furny
      </Name>
      <InputSearch type="text" placeholder="Search" />
      <ButtonCart>
        <ShoppingCartIcon />
      </ButtonCart>
    </HeaderMain>
  );
}

export default Header;
