import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";

import CartContext from "../context/Cart/CartContext";

import { PrincipalContainer } from "../components";
import { Button, CartItem, NotFound } from "../components/common";

import formatNumber from "../utils/formatNumber";

const Cart = () => {
  const cartContext = useContext(CartContext);

  const totalCart = () => {
    let total = 0;
    cartContext.state.items.forEach((item) => {
      total += item.unitPrice * item.quantity;
    });
    return formatNumber(total);
  };

  const total = useMemo(() => totalCart(), [cartContext.state]);

  return (
    <PrincipalContainer title="Shopping Cart">
      <div
        className="cart"
        style={cartContext.state.items.length > 4 ? { height: "auto" } : null}
      >
         {cartContext.state.items.length > 0 ? (
         
            <div className="cart_list">
              {cartContext.state.items.map((item) => (
                <CartItem item={item} key={item.productId} />
              ))}
            </div>
         
        ) : (
          <NotFound text="You have no products in your cart" />
        )}
      </div>
      <div className="cart_info">
          <div className="cart_info_txt">
            <p>Products in your Order</p>
          </div>
          <div className="cart_info_total">
            <Link to="/checkout">
              <Button size="block">
                Total: ${total}
              </Button>
            </Link>
          </div>
        </div>

    </PrincipalContainer>
  );
};

export default Cart;
