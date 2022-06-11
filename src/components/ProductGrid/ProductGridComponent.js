import PropTypes from "prop-types";
import ProductTileComponent from "../ProductTile/ProductTileComponent";
import * as Styles from "./product-grid-styles";

export default function ProductGridComponent({ products }) {
  const productsMap = products.map((product, index) => (
    <ProductTileComponent
      productInfo={product}
      key={product.id}
      index={index}
      lastTileIdx={products.length}
      firstTileIdx={0}
    />
  ));

  return <Styles.Styledcontainer>{productsMap}</Styles.Styledcontainer>;
}

ProductGridComponent.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
