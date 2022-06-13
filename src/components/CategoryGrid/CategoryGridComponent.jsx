import PropTypes from "prop-types";
import CategoryCardComponent from "../CategoryCard/CategoryCardComponent";
import { FaArrowRight } from "react-icons/fa";
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
      <Styles.StyledButton onClick={() => switchComponent("pl")}>
        <span>View all products</span>
        <FaArrowRight />
      </Styles.StyledButton>
    </Styles.StyledGrid>
  );
};

CategoryGridComponent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryGridComponent;
