import CategoryCard from "./CategoryCard";
import styles from "../styles/CategoryGrid.module.css";

const CategoryGrid = ({ categories }) => {
  const categoriesMap = categories.map((category) => (
    <CategoryCard
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

export default CategoryGrid;
