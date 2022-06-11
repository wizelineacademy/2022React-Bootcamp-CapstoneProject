import PropTypes from "prop-types";
import * as Styles from "./product-tile-styles";

const ProductTileComponent = ({
  productInfo,
  index,
  firstTileIdx,
  lastTileIdx,
}) => {
  const displayStyle =
    index >= firstTileIdx && index <= lastTileIdx
      ? { display: "block" }
      : { display: "none" };

  return (
    <Styles.StyledTile style={displayStyle}>
      <Styles.Image
        src={productInfo.data.mainimage.url}
        alt={productInfo.data.mainimage.alt}
      />
      <Styles.InformationContainer>
        <Styles.TileHeader>{productInfo.data.name}</Styles.TileHeader>
        <p>{productInfo.data.category.slug}</p>
        <p>$ {productInfo.data.price}</p>
      </Styles.InformationContainer>
    </Styles.StyledTile>
  );
};

ProductTileComponent.propTypes = {
  productInfo: PropTypes.shape({
    data: PropTypes.shape({
      mainimage: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.object.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  firstTileIdx: PropTypes.number.isRequired,
  lastTileIdx: PropTypes.number.isRequired,
};

export default ProductTileComponent;
