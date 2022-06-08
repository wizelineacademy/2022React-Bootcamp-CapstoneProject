import React from 'react';
import {FooterWrap, Links, SocialMedia} from './Footer.styled';
import iconf from './icons/facebook.png';
import icont from './icons/twitter.png';
import iconI from './icons/instagram.png';


export default function Footer() {
    return(
        <FooterWrap>
            <Links>
                <ul>
                    <a href=".">Home Tours</a>
                    <a href=".">Payment</a>
                    <a href=".">FAQ</a>
                </ul>
            </Links>
            <p><small>Ecommerce created during Wizeline’s Academy React Bootcamp</small></p>
            <SocialMedia>
                <a href=".">
                    <img src={iconf} alt="facebook-icon"/>
                </a>
                <a href=".">
                    <img src={icont} alt="twitter-icon"/>
                </a>
                <a href=".">
                    <img src={iconI} alt="twitter-icon"/>
                </a>
            </SocialMedia>
        </FooterWrap>
    )
}; 