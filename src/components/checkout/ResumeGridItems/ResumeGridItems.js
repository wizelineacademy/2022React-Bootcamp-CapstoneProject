import { useContext } from "react";
import { ShopContext } from "./../../../context";
import { ItemResume } from "./../ItemResume";
import { FlexItems } from "./styled";

export const ResumeGridItems = () => {
  const { cart } = useContext(ShopContext);
  return (
    <FlexItems>
      {cart.map((item) => (
        <ItemResume key={item.id} {...item} />
      ))}
    </FlexItems>
  );
};
