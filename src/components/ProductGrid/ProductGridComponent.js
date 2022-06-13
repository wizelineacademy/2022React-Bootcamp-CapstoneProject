import PropTypes from "prop-types";
import ProductTileComponent from "../ProductTile/ProductTileComponent";
import PaginationComponent from "../Pagination/PaginationComponent";
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

  return (
    <Styles.Styledcontainer>
      <Styles.ProductsContainer>{productsMap}</Styles.ProductsContainer>
      <Styles.PaginationContainer>
        <PaginationComponent />
      </Styles.PaginationContainer>
    </Styles.Styledcontainer>
  );
}

ProductGridComponent.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
