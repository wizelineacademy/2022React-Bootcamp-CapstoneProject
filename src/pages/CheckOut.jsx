import React, { useContext, useMemo } from "react";

import CartContext from "../context/Cart/CartContext";

import { PrincipalContainer } from "../components";
import { CartItem, NotFound, OrderForm } from "../components/common";

import formatNumber from "../utils/formatNumber";
import { FINISH_ORDER } from "../utils/constants";

const CheckOut = () => {
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
    
      <PrincipalContainer title="Checkout">
        <div
          className="cart"
          style={cartContext.state.items.length > 4 ? { height: "auto" } : null}
        >

          {cartContext.state.items.length > 0 ? (
            <div className="cart_list">
              {cartContext.state.items.map((item) => (
                <CartItem
                  item={item}
                  key={item.productId}
                  viewType={FINISH_ORDER}
                />
              ))}
              <div className="cart_list_total">
                <span>
                  Total: <strong>${total}</strong>
                </span>
              </div>
            </div>
          ) : (
            <NotFound text="You have no products added to your shopping cart" />
          )}
        </div>
        <div className="cart_info">
            <div className="cart_info_txt">
              <p>Check Out Your Purchase</p>
            </div>
            <OrderForm />
          </div>

      </PrincipalContainer>

  );
};

export default CheckOut;
