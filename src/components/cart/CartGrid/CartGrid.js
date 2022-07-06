import PropTypes from "prop-types";
import { CartItem } from "../CartItem";

const CartGrid = ({ cart }) => {
  return (
    <div style={{ marginTop: 30 }}>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

CartGrid.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default CartGrid;
