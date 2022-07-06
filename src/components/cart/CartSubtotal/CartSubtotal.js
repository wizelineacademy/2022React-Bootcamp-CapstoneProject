import { ArrowRight } from "../../icons";
import { WrapperPrice, Block, LabelPrice, CheckoutLink } from "./styled";

const CartSubtotal = ({ subtotal }) => {
  return (
    <WrapperPrice>
      <Block>Sub Total</Block>
      <LabelPrice>{`$ ${subtotal}`}</LabelPrice>
      <CheckoutLink to="/checkout">
        Proceed To Checkout
        <ArrowRight />
      </CheckoutLink>
    </WrapperPrice>
  );
};

export default CartSubtotal;
