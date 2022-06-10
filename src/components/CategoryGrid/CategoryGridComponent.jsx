import PropTypes from "prop-types";
import CategoryCardComponent from "../CategoryCard/CategoryCardComponent";
import * as Styles from "./category-grid-styles";

const CategoryGridComponent = ({ categories }) => {
  const categoriesMap = categories.map((category) => (
    <CategoryCardComponent key={category.id} categoryInfo={category} />
  ));

  return (
    <Styles.StyledGrid>
      <Styles.GridHeader>PRODUCT CATEGORIES</Styles.GridHeader>
      <Styles.GridContainer>{categoriesMap}</Styles.GridContainer>
    </Styles.StyledGrid>
  );
};

CategoryGridComponent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryGridComponent;
