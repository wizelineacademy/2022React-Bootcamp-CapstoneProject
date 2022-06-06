import React from "react";
import { CartImage, Container, Text } from "./Cart.styled";
import shopCart from "icons/shopCart.svg";
import { CART_ROUTE } from "utils/routes";

const Cart = () => (
  <Container href={CART_ROUTE}>
    <CartImage src={shopCart} />
    <Text>My Cart</Text>
  </Container>
);

export default Cart;
