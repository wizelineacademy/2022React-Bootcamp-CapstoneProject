import PropTypes from "prop-types";
import ProductTileComponent from "./ProductTileComponent";
import BtnSliderComponent from "./BtnSliderComponent";
import styles from "../styles/FeaturedProducts.module.css";

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
    <div className={styles.featured_products}>
      <h2>FEATURED PRODUCTS</h2>
      <div
        className={`${styles.featured_products} ${styles.products_container}`}
      >
        <BtnSliderComponent moveSlide={prevProductGrid} direction={"prev"} />
        <div className={styles.products}>{productGrid}</div>
        <BtnSliderComponent moveSlide={nextProductGrid} direction={"next"} />
      </div>
    </div>
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
