import { React, useState, useEffect, useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCart";
import { ShoppingCartWrapper, CartItem, UiPannel } from "./ShoppingCart.styled";
import { Link } from 'react-router-dom';

export default function ShopingCart() {
  const { items } = useContext(ShoppingCartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = items.reduce((total, item) => {
      return total + item.total;
    }, 0);
    setTotalPrice(total);
  }, [items]);

  return (
    <ShoppingCartWrapper>
      {items.map((item, index) => (
        <CartItemDetail item={item} index={index} />
      ))}
      <UiPannel>
        <div className="summary">
          <div className="total-row-container">
            <span>Total</span>
            <span className="item-tag-price">${totalPrice}</span>
          </div>
          <div className="actions">
            <Link to="/checkout">
            <button>Continue</button>
            </Link>
          </div>
        </div>
      </UiPannel>
    </ShoppingCartWrapper>
  );
}
const CartItemDetail = ({ item, index }) => {
  const {
    data: {
      name,
      mainimage: { url },
      short_description,
      price,
      sku,
      stock,
    },
    selectedQuantity,
  } = item;
  const [quantity, setQuantity] = useState(selectedQuantity || 1);
  const { items, updateItems } = useContext(ShoppingCartContext);

  const add = () => {
    setQuantity((prev) => prev + 1);
  };
  const substract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  useEffect(() => {
    const newItems = [...items];
    newItems[index] = {
      ...item,
      selectedQuantity: quantity,
      total: quantity * price,
    };
    updateItems(newItems);
  }, [quantity]);
  return (
    <CartItem key={sku}>
      <figure className="item-image">
        <img src={url} alt="logo" className="img-logo" />
      </figure>
      <div className="item-information">
        <div className="item-description">
          <h2 className="item-title">{name}</h2>
          <h3 className="subtitle">{short_description}</h3>
          <button>Delete</button>
        </div>
      </div>
      <div className="quantity-selector">
        <div className="quantity-selector-container">
          <button onClick={substract}>-</button>
          <input type="text" value={quantity} />
          <button onClick={add}>+</button>
          <p>{stock} available</p>
        </div>
      </div>
      <div className="item-price">
        <span className="item-tag-price">$ {price * quantity}</span>
      </div>
    </CartItem>
  );
};
