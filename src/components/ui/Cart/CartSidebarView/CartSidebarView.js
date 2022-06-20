import { Bag } from "../../../icons";
import { BagContainer, Badge } from "./styled";

const CartSidebarView = () => {
  return (
    <BagContainer amount="10">
      <Badge>10</Badge>
      <Bag />
    </BagContainer>
  );
};

export default CartSidebarView;
