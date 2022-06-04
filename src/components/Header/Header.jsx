import React from 'react';
import {HeaderWrapper} from './Header.styled';
import logo from '../../logo-fur.jpg';
import icon from '../../shopping-cart.png';
import log from '../../user.png';



export default function Header() {
    return (
        <HeaderWrapper>
            <a href=".">
                <img src={logo} alt="logo" className="img-logo"/>
            </a>
            <input className="input-search" placeholder=" Buscar..."/>

            <nav>
            <a href=".">
                <img src={log} alt="cart-icon" className="log-icon"/>
            </a>
            <span>Hola, Silvia</span>    
            <a href=".">
                <img src={icon} alt="cart-icon" className="img-icon"/>
            </a>
            </nav>
        </HeaderWrapper>
    )
};
