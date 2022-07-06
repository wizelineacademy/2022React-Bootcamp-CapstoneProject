import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import ShopContext from "./../../../context/shop/shopContext";
import { Button } from "../../../styled-components";
import { Select } from "../../common";
import {
  CardContainer,
  WrapperDetails,
  ImageContainer,
  Details,
  Title,
  Price,
} from "./styled";

const CartItem = ({ item }) => {
  const { id, title, quantity, stock, urlImage, price } = item;
  const [newQuantity, setNewQuantity] = useState(quantity);
  const { updateQuantity, deleteItem } = useContext(ShopContext);

  useEffect(() => {
    const update = () => {
      item.quantity = newQuantity;
      updateQuantity(item);
    };
    update();
    // eslint-disable-next-line
  }, [newQuantity]);

  return (
    <CardContainer>
      <WrapperDetails>
        <ImageContainer>
          <img src={urlImage} alt={title} />
        </ImageContainer>
        <Details>
          <Title to={`/product/${id}`}>{`${title} / $${price}`} </Title>
          <Price>${quantity * price}</Price>
          <Select
            stock={stock}
            quantity={newQuantity}
            setQuantity={setNewQuantity}
          />
        </Details>
      </WrapperDetails>
      <Button onClick={() => deleteItem(id)}>x</Button>
    </CardContainer>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;
