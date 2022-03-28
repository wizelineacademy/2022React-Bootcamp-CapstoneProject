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

//const [route, setRoute] = useState('/');


export const Layout = () => {
  return (
    <>
      <nav className=''>
        <ul className='topnav'>
          <li>
            <Link 
                to="/"
                className='active'
            >
                Home
            </Link>
          </li>
          <li>
            <Link to="/products">Product List</Link>
          </li>
          <li>
            <Link to="/productDetail">Product Detail</Link>
          </li>
          <li className="right">
            <Link to="#">{shoppingCart}</Link>
          </li>
          <div className='search-container'>
            <li className="">
              <input type="text" placeholder="Search.." name="search"/>
            </li>
            <li className="">
              <Link to="#">{searchIcon}</Link>
            </li>
          </div>
        </ul>
      </nav>

      <Outlet />
      <FootDiv/>
    </>
  )
};
