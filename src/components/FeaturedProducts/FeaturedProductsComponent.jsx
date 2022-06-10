import PropTypes from "prop-types";
import ProductTileComponent from "../ProductTile/ProductTileComponent";
import BtnSliderComponent from "../ButtonSlider/BtnSliderComponent";
import * as Styles from "./featured-products-styles";

const FeaturedProductsComponent = ({
  products,
  lastTileIdx,
  firstTileIdx,
  nextProductGrid,
  prevProductGrid,
}) => {
  const productGrid = products.map((product, index) => (
    <ProductTileComponent
      productInfo={product}
      key={product.id}
      index={index}
      lastTileIdx={lastTileIdx}
      firstTileIdx={firstTileIdx}
    />
  ));

  return (
    <Styles.StyledFeaturedProducts>
      <h2>FEATURED PRODUCTS</h2>
      <div className="products_container">
        <BtnSliderComponent moveSlide={prevProductGrid} direction={"prev"} />
        <Styles.Products>{productGrid}</Styles.Products>
        <BtnSliderComponent moveSlide={nextProductGrid} direction={"next"} />
      </div>
    </Styles.StyledFeaturedProducts>
  );
};

FeaturedProductsComponent.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  lastTileIdx: PropTypes.number.isRequired,
  firstTileIdx: PropTypes.number.isRequired,
  nextProductGrid: PropTypes.func.isRequired,
  prevProductGrid: PropTypes.func.isRequired,
};

export default FeaturedProductsComponent;
