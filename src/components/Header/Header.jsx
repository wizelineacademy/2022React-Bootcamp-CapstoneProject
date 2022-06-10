import React from 'react';
import { HeaderWrapper, InputSearcher, ProfileWrapper, CartWrapper } from './Header.styled';
import logo from '../../logo-fur.jpg';
import icon from '../../shopping-cart.png';
import log from '../../user.png';


export default function Header({setActiveProductList}) {
    return (
        <HeaderWrapper>
                <img 
                    src={logo} 
                    alt="logo" 
                    className="img-logo"
                    onClick={e => setActiveProductList(false)}/>
            
            <InputSearcher 
                type="text" 
                id ="search-box" 
                className="input-search" 
                placeholder=" Search..."/>
            
            <ProfileWrapper>
                <a href=".">
                    <img src={log} alt="user-icon" className="user-icon"/>
                </a>
                <span className="user-name">Silvia</span> 
            </ProfileWrapper>   
            <CartWrapper>
                <a href=".">
                    <img src={icon} alt="cart-icon" className="img-icon"/>
                </a>
            </CartWrapper>
        </HeaderWrapper>
    )
};


