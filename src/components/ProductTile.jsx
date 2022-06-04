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
        <p>{productInfo.slugs[0]}</p>
        <p>{productInfo.data.price}</p>
      </div>
    </div>
  );
};

export default ProductTile;
