import { useContext, useState } from "react";
import { ShopContext } from "../../../context";
import { Cart } from "../../icons";
import { Select } from "../../common";
import { TagsWraper } from "../TagsWrapper";
import { TableSpecs } from "../TableSpecs";
import PropTypes from "prop-types";
import {
  Category,
  Title,
  Description,
  SkuWrapper,
  StockDetail,
  State,
  Stock,
  AddButton,
} from "./styled";

const Details = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(ShopContext);

  const { category, title, description, sku, tags, price, stock, specs } =
    product;

  const handleAddProduct = () => {
    if (stock <= 0) {
      return;
    }
    addToCart({
      ...product,
      quantity: parseInt(quantity),
    });
  };

  return (
    <div>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <SkuWrapper>
        <span>sku:</span>
        {sku}
      </SkuWrapper>
      <TagsWraper tags={tags} />

      <h2>${price}</h2>
      <StockDetail>
        <State>{stock > 0 ? "Available" : "Sold out"}</State>
        <Stock>({stock} available)</Stock>
      </StockDetail>
      <Select stock={stock} setQuantity={setQuantity} quantity={quantity} />
      <AddButton onClick={handleAddProduct}>
        <Cart />
        Add cart
      </AddButton>
      <TableSpecs specs={specs} />
    </div>
  );
};

Details.propTypes = {
  product: PropTypes.object,
};

export default Details;
