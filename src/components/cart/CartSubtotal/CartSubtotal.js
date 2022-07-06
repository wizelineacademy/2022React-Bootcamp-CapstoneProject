import PropTypes from "prop-types";
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

CartSubtotal.propTypes = {
  subtotal: PropTypes.number.isRequired,
};

export default CartSubtotal;
