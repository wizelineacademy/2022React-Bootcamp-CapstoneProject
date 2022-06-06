import React from 'react';
import {FooterWrap} from './Footer.styled';
import iconf from './icons/facebook.png';
import icont from './icons/twitter.png';
import iconI from './icons/instagram.png';


export default function Footer() {
    return(
        <FooterWrap>
            <div className="links">
                <ul>
                    <a href=".">Quiénes somos</a>
                    <a href=".">Decoración</a>
                    <a href=".">FAQ</a>
                </ul>
            </div>
            <p><small>Ecommerce created during Wizeline’s Academy React Bootcamp</small></p>
            <div className="social-media">
                <a href=".">
                    <img src={iconf} alt="facebook-icon"/>
                </a>
                <a href=".">
                    <img src={icont} alt="twitter-icon"/>
                </a>
                <a href=".">
                    <img src={iconI} alt="twitter-icon"/>
                </a>
            </div>
            
            
        </FooterWrap>
    )
}; 