import { FaShoppingCart } from 'react-icons/fa';
import { Wrapper } from './cartbuttons.styled';

function CartButtons() {
  return (
    <Wrapper className="cart-btn-wrapper">
      <div className="cart-btn">
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">0</span>
        </span>
      </div>
    </Wrapper>
  );
}

export default CartButtons;
