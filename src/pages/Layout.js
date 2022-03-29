import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { FootDiv } from '../components/footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import '../components/css/navbar1.css';
import '../components/css/footer.css';

const searchIcon = <FontAwesomeIcon icon={faSearch} />
const shoppingCart = <FontAwesomeIcon icon={faCartShopping} />

export const Layout = () => {
  //let {location}= useLocation(); 
  const location = window.location.pathname;
  console.log(location);

  return (
    <>
      <nav className=''>
        <ul className='topnav'>
          <li>
            <Link 
                to="/"
                className={location === '/' || location === '/home' ? 'active' : ''} 
            >
                Home
            </Link>
          </li>
          <li>
            <Link 
              to="/products"
              className={location === '/products' ? 'active' : ''} 
            >
              Product List
            </Link>
          </li>
          <li className="right">
            <Link to="#">{shoppingCart}</Link>
          </li>
          <form className='search-container'>
            <li className="">
              <input type="text" placeholder="Search.." name="search"/>
            </li>
            <li className="">
              <button>{searchIcon}</button>
            </li>
          </form>
        </ul>
      </nav>

      <Outlet />
      <FootDiv/>
    </>
  )
};
