import React from 'react';
import logoStore from './images/logoF.png';
import Logo from './Logo.js';
import InputSearch from './InputSearch.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
    background-color: #E0DFD5;
    height: 11vh;
    width: 100%;
`;

const HeaderLink = styled(Link)`
  float: left;
  display: block;
  font-family: Garamond, serif;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
`;

function Header() {
  return (
    <StyledDiv>
        <Logo haut={'100%'} long={120} 
        source={logoStore} alt="Store Logo" 
        margin={'10%'} side={'left'}/>

        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/products">Products</HeaderLink>
        
        <Logo haut={50} long={50} 
        source="https://img.icons8.com/stickers/100/undefined/shopping-cart.png" 
        alt="Cart Logo" margin={'5%'} side={'right'} />
        <InputSearch />
    </StyledDiv>
  )
}

export default Header