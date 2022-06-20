import {React, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderWrapper, InputSearcher, ProfileWrapper, CartWrapper } from './Header.styled';
import logo from '../../logo-fur.jpg';
import icon from '../../shopping-cart.png';
import log from '../../user.png';


export default function Header() {
    const [userInput, setUserInput ] = useState();
    let navigate = useNavigate();
    
    const clickHandler = () => {
        navigate(`search-results/${userInput}`)
    }
    const inputSearch = (e) => {
        setUserInput(()=> e.target.value)
     }
    return (
        <HeaderWrapper>
                <Link to="/">
                <img 
                    src={logo} 
                    alt="logo" 
                    className="img-logo"/>
                </Link>
            <InputSearcher 
                type="search" 
                id ="search-box" 
                className="input-search" 
                placeholder=" Search..."
                onChange={inputSearch}/>

                <input type="submit" value="search"onClick={clickHandler}/>
            
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


