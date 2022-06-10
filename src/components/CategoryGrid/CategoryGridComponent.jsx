import PropTypes from "prop-types";
import CategoryCardComponent from "../CategoryCard/CategoryCardComponent";
import * as Styles from "./category-grid-styles";

const CategoryGridComponent = ({ categories, selectComponent }) => {
  const categoriesMap = categories.map((category) => (
    <CategoryCardComponent key={category.id} categoryInfo={category} />
  ));

  const switchComponent = (comp) => {
    selectComponent(comp);
  };

  return (
    <Styles.StyledGrid>
      <Styles.GridHeader>PRODUCT CATEGORIES</Styles.GridHeader>
      <Styles.GridContainer>{categoriesMap}</Styles.GridContainer>
      <button
        style={{ fontSize: "30px" }}
        onClick={() => switchComponent("pl")}
      >
        View all products
      </button>
    </Styles.StyledGrid>
  );
};

CategoryGridComponent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryGridComponent;
