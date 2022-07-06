import { Bag } from "../../../icons";
import { BagContainer, Badge } from "./styled";
import { getNumberItems } from "./utils";
import { useContext } from "react";
import { ShopContext } from "./../../../../context";

const CartSidebarView = () => {
  const { cart } = useContext(ShopContext);
  return (
    <BagContainer to="/cart">
      <Badge>{getNumberItems(cart)}</Badge>
      <Bag />
    </BagContainer>
  );
};

export default CartSidebarView;
