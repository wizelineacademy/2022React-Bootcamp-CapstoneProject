import React, { useRef, useContext, useMemo } from "react";
import PropTypes from "prop-types";

import { ProductQuantityControl } from "./";
import Button from "./Button";

import CartContext from "../../context/Cart/CartContext";

import formatNumber from "../../utils/formatNumber";
import { FINISH_ORDER } from "../../utils/constants";

const CartItem = ({ item, viewType }) => {
  const cartContext = useContext(CartContext);
  const itemRef = useRef(null);

  const subtotalCart = () => {
    const subtotal = item.unitPrice * item.quantity;
    return formatNumber(subtotal);
  };

  const subtotal = useMemo(() => subtotalCart(), [item.quantity]);

  const updateQuantity = (type) => {
    const stock = item.stock;
    const quantity = item.quantity;
    const quantityTemp =
      type === "plus"
        ? quantity + 1 <= stock
          ? quantity + 1
          : quantity
        : quantity - 1 < 1
        ? quantity
        : quantity - 1;
    if (quantityTemp !== item.quantity) {
      cartContext.updateQuantityProduct(quantityTemp, item.productId);
    }
  };

  const removeCartItem = () => {
    cartContext.removeProduct(item.productId);
  };

  return (
    <div className="cart_item" ref={itemRef}>
      <div className="cart_item_image">
        <img src={item.mainImage} alt={item.productName} />
      </div>
      <div className="cart_item_info">
        <div className="cart_item_info_name">{item.productName}</div>
        <div className="cart_item_info_price">
          <p className="cart_item_info_price_unit">
            Unit Price: <strong>${formatNumber(item.unitPrice)}</strong>
          </p>
          <p className="cart_item_info_price_subtotal">
            Subtotal: <strong>${subtotal}</strong>
          </p>
        </div>
        <div className="cart_item_info_quantity">
          {viewType !== FINISH_ORDER ? (
            <ProductQuantityControl
              quantity={item.quantity}
              updateQuantity={updateQuantity}
            />
          ) : (
            <h3>Quantity: {item.quantity}</h3>
          )}
        </div>
        {viewType !== FINISH_ORDER && (
          <div className="cart_item_info_remove">
            
            <Button
            handler={() => removeCartItem()}
          >
           REMOVE
          </Button>
          </div>
          
        )}
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  viewType: PropTypes.string,
};

export default CartItem;
