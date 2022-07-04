import React from 'react'
import {ShoppingCartWrapper, CartItem, UiPannel} from './ShoppingCart.styled';
import logo from '../../logo-fur.jpg';

export default function ShopingCart() {
    return (
        <ShoppingCartWrapper>
            
                <CartItem>
                    <figure className="item-image">
                    <img 
                    src={logo} 
                    alt="logo" 
                    className="img-logo"/>
                    </figure>
                    <div className="item-information">
                        <div className="item-description">
                            <h2 className="item-title">Aquaphor armchair</h2>
                            <h3 className="subtitle">Fragancia: aquaphor, Tipos de piel: Seca</h3>
                            <button>Eliminar</button>
                        </div>
                    </div>
                    <div className="quantity-selector">
                        <div className="quantity-selector-container">
                                <button>-</button>
                                <input type="text" value="1"/>
                                <button>+</button>
                        </div>
                    </div>
                    <div className="item-price">
                        <span className="item-tag-price">
                            $3000
                        </span>
                    </div>
                </CartItem>
                <UiPannel>
                <div className="summary">
                    <div className="total-row-container">
                        <span>Total</span>
                        <span className="item-tag-price">$3000</span>
                    </div>
                    <div className="actions">
                        <button>Continue</button>
                    </div>
                </div>
                </UiPannel>
        </ShoppingCartWrapper>
    )
}
