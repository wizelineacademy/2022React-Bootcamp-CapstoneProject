import { Bag } from "../../../icons";
import styled from "@emotion/styled";

const BagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    transform: scale(0.95);
    box-shadow: -2px 40px 67px -6px rgba(0, 0, 0, 0.24);
  }
`;

const CartSidebarView = () => {
  return (
    <BagContainer>
      <Bag />
    </BagContainer>
  );
};

export default CartSidebarView;
