import PropTypes from "prop-types";
import CategoryCardComponent from "../CategoryCard/CategoryCardComponent";
import styles from "./CategoryGrid.module.css";

const CategoryGridComponent = ({ categories }) => {
  const categoriesMap = categories.map((category) => (
    <CategoryCardComponent
      className={styles.card_style}
      key={category.id}
      categoryInfo={category}
    />
  ));

  return (
    <div className={styles.category_grid}>
      <h2 className={styles.category_grid_header}>PRODUCT CATEGORIES</h2>
      <div className={styles.categories_container}>{categoriesMap}</div>
    </div>
  );
};

CategoryGridComponent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryGridComponent;
