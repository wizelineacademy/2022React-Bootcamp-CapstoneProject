import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png';
import {
  HeaderMain,
  Image,
  Name } from './Header.styled';
import { ROUTES } from '../../utils/constants';
import { InpurtSearch } from './InputSearch/InputSearch';
import { ShoppingCartButton } from './ShoppingCart/ShoppingCart';

function Header( { itemCounter } ) {

  return (
    <HeaderMain isYellow>
      <Link to={ROUTES.home}>
        <Image src={logo} alt="logo" />
      </Link>
      <Name>
        Furny
      </Name>
      <InpurtSearch />
      <ShoppingCartButton itemCounter={itemCounter} />
    </HeaderMain>
  );
}

export default Header;
