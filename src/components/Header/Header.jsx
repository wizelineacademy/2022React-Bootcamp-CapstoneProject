import {React, useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderWrapper, InputSearcherWrapper, ProfileWrapper, CartWrapper } from './Header.styled';
import {ShoppingCartContext} from '../../contexts/ShoppingCart';
import logo from '../../logo-fur.jpg';
import icon from '../../shopping-cart.png';
import log from '../../user.png';


export default function Header() {
    const [userInput, setUserInput ] = useState();
    const navigate = useNavigate();

    const {items} = useContext(ShoppingCartContext);
    
    const clickHandler = () => {
        navigate(`/search?q=${userInput}`)
    }
    const inputSearch = (e) => {
        setUserInput(e.target.value)
     }
    return (
        <HeaderWrapper>
                <Link to="/">
                <img 
                    src={logo} 
                    alt="logo" 
                    className="img-logo"/>
                </Link>
                    <InputSearcherWrapper>
                        <input 
                        type="search" 
                        id ="search-box" 
                        className="input-search" 
                        placeholder=" Search..."
                        onChange={inputSearch}/>
                        <span onClick={clickHandler}>Search</span>
                    </InputSearcherWrapper>
                
            <ProfileWrapper>
                <a href=".">
                    <img src={log} alt="user-icon" className="user-icon"/>
                </a>
                <span className="user-name">Silvia</span> 
            </ProfileWrapper>   
            <CartWrapper>
                <Link to="/cart">
                    <img src={icon} alt="cart-icon" className="img-icon"/>
                </Link>
                <span className="icon-quantity">{items.length}</span>
            </CartWrapper>
        </HeaderWrapper>
    )
};


