import React from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import { FootDiv } from '../components/footer';
import { SearchPage } from './search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import '../components/css/navbar1.css';
import '../components/css/footer.css';

const shoppingCart = <FontAwesomeIcon icon={faCartShopping} />

export const Layout = () => {
  let { pathname } = useLocation(); 
  //const pathname = location.pathname;

  return (
    <>
      <nav className=''>
        <ul className='topnav'>
          <li>
            <Link 
                to="/"
                className={pathname === '/' || pathname === '/home' ? 'active' : ''} 
            >
                Home
            </Link>
          </li>
          <li>
            <Link 
              to="/products"
              className={pathname === '/products' ? 'active' : ''} 
            >
              Product List
            </Link>
          </li>
          <li className="right">
            <Link to="#">{shoppingCart}</Link>
          </li>
          <SearchPage/>
        </ul>
      </nav>

      <Outlet />
      <FootDiv/>
    </>
  )
};
