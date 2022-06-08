import React from 'react';
import {HeaderWrapper, InputSearcher, IconWrapper} from './Header.styled';
import logo from '../../logo-fur.jpg';
import icon from '../../shopping-cart.png';
import log from '../../user.png';




export default function Header() {
    return (
        <HeaderWrapper>
            <a href=".">
                <img src={logo} alt="logo" className="img-logo"/>
            </a>
            <InputSearcher 
                type="text" 
                id ="search-box" 
                className="input-search" 
                placeholder=" Search..."/>
            <IconWrapper>
                <a href=".">
                    <img src={log} alt="user-icon" className="user-icon"/>
                </a>
                <span className="user-name">Silvia</span>    
                <a href=".">
                    <img src={icon} alt="cart-icon" className="img-icon"/>
                </a>
            </IconWrapper>
        </HeaderWrapper>
    )
};


