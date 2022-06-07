import React from 'react'

import { BiShoppingBag, BiSearchAlt } from 'react-icons/bi'
import { GiSofa } from 'react-icons/gi'


import '../stylesheets/homepage/header.scss';

function Header() {

    return (
        <header className='header-container'>
            <div className='logo-container'>
                <a href="#home">
                    <GiSofa className='icon' />
                </a>
            </div>
            <div className='searchbar-container'>
                <input type="text" placeholder='search' />
                <button type="submit">
                    <BiSearchAlt className='icon' />
                </button>
            </div>
            <div className="cart-container">
                <a href="#cart">
                    <BiShoppingBag className='icon' />
                </a>
            </div>
        </header>
    )
}

export default Header