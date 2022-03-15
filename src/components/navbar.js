import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import logo from './img/logo.jpg'

const searchIcon = <FontAwesomeIcon icon={faSearch} />
const shoppingCart = <FontAwesomeIcon icon={faCartShopping} />

export const NavBar = ({route, onchange}) => {
  return (
    <div className="topnav">
      <a className="" 
        href="#home"
        onClick={() => onchange('/')}>
          <div className="img"><img src={logo} alt="home"/></div>
      </a>
      <a className={route === '/' ? 'active' : ''} 
        href="#home"
        onClick={() => onchange('/')}>Home</a>
      <a className={route === '/products' ? 'active' : ''} 
        href="#products"
        onClick={() => onchange('/products')}>Products</a>
      <div className="search-container">
        <form action="/">
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit">{shoppingCart}</button>
          <button type="submit">{searchIcon}</button>
        </form>
      </div>
    </div>
  );
};