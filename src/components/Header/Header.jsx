import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as ShoppingCartIcon } from '../../images/shopping-cart.svg';
import logo from '../../images/logo.png';

import {
  HeaderMain, Image, Name, InputSearch, ButtonCart,
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
      <InputSearch type="text" placeholder="Search" />
      <ButtonCart>
        <ShoppingCartIcon />
      </ButtonCart>
    </HeaderMain>
  );
}

export default Header;
