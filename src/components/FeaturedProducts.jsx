import ProductTile from "./ProductTile";
import BtnSlider from "./BtnSlider";
import styles from "../styles/FeaturedProducts.module.css";

const FeaturedProducts = ({
  products,
  lastTileIdx,
  firstTileIdx,
  nextProductGrid,
  prevProductGrid,
}) => {
  const productGrid = products.map((product, index) => (
    <ProductTile
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
        <BtnSlider moveSlide={prevProductGrid} direction={"prev"} />
        {productGrid}
        <BtnSlider moveSlide={nextProductGrid} direction={"next"} />
      </div>
    </div>
  );
};

export default FeaturedProducts;
