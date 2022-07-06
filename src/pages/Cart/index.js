import { useContext } from "react";
import { ShopContext } from "./../../context";
import { Container, SectionHeading } from "../../styled-components";
import { CartGrid, CartSubtotal } from "./../../components";
import { DetailsContainer, WrapperList, Block, Message } from "./styled";
import { getSubtotal } from "./../../utils/getSubtotal";

const CartPage = () => {
  const { cart } = useContext(ShopContext);
  return (
    <Container style={{ marginTop: "60px" }}>
      <SectionHeading>Shopping cart</SectionHeading>
      {cart.length > 0 ? (
        <DetailsContainer>
          <WrapperList>
            <Block>Product list</Block>
            <CartGrid cart={cart} />
          </WrapperList>
          <CartSubtotal subtotal={getSubtotal(cart)} />
        </DetailsContainer>
      ) : (
        <Message>Shopping Cart Empty :c</Message>
      )}
    </Container>
  );
};

export default CartPage;
