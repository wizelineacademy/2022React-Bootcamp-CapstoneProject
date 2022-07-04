import { Cart } from "../../icons";
import { Select } from "../../common";
import { TagsWraper } from "../TagsWrapper";
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
import { TableSpecs } from "../TableSpecs";
import PropTypes from "prop-types";

const Details = ({ product }) => {
  const { category, title, description, sku, tags, price, stock, specs } =
    product;
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
      <Select stock={stock} />
      <AddButton>
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
