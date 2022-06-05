import PropTypes from "prop-types";

const ProductTile = ({ productInfo, index, firstTileIdx, lastTileIdx }) => {
  const displayStyle =
    index >= firstTileIdx && index <= lastTileIdx
      ? { display: "block" }
      : { display: "none" };

  return (
    <div style={displayStyle}>
      <img
        src={productInfo.data.mainimage.url}
        alt={productInfo.data.mainimage.alt}
      />
      <div>
        <h3>{productInfo.data.name}</h3>
        <p>{productInfo.data.category.slug}</p>
        <p>{productInfo.data.price}</p>
      </div>
    </div>
  );
};

ProductTile.propTypes = {
  productInfo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  firstTileIdx: PropTypes.number.isRequired,
  lastTileIdx: PropTypes.number.isRequired,
};

export default ProductTile;
