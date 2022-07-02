import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png';
import {
  HeaderMain,
  Image,
  Name } from './Header.styled';
import { ROUTES } from '../../utils/constants';
import { InpurtSearch } from './InputSearch/InputSearch';
import { ShoppingCart } from './ShoppingCart/ShoppingCart';

function Header() {

  return (
    <HeaderMain isYellow>
      <Link to={ROUTES.home}>
        <Image src={logo} alt="logo" />
      </Link>
      <Name>
        Furny
      </Name>
      <InpurtSearch />
      <ShoppingCart />
    </HeaderMain>
  );
}

export default Header;
