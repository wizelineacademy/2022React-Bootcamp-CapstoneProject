import React from 'react'
import NavBar from './NavBar';
import { Input } from '../../styles';

const Header = () => {


    return (
        <NavBar >
            <span>EcoForniture</span>
            <div>
                <Input type='text' placeholder='Search...' />
                <i className="fa-solid fa-cart-shopping end"> </i>
            </div>
        </NavBar>
    )
}

export default Header