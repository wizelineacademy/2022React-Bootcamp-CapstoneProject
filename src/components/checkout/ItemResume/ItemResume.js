import {
  ItemContainer,
  ItemDetail,
  Badge,
  Title,
  Price,
  Subtotal,
  ItemImage,
} from "./styled";
import { types } from "./proptypes";

const ItemResume = ({ title, urlImage, alt, price, quantity }) => {
  return (
    <ItemContainer>
      <ItemDetail>
        <Badge text={quantity}>
          <ItemImage src={urlImage} alt={alt} />
        </Badge>
        <div>
          <Title>{title}</Title>
          <Price>${price}</Price>
        </div>
      </ItemDetail>
      <Subtotal>${price * quantity}</Subtotal>
    </ItemContainer>
  );
};

ItemResume.propTypes = types;

export default ItemResume;
