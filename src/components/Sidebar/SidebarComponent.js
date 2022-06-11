import PropTypes from "prop-types";
import * as Styles from "./sidebar-styles";

export default function SidebarComponent({ categories }) {
  const categoriesMap = categories.map((category) => (
    <Styles.ListItem key={category.id}>
      <input
        type="checkbox"
        id={category.data.name}
        name={category.data.name}
      />
      <label htmlFor={category.data.name}>{category.data.name}</label>
    </Styles.ListItem>
  ));

  return (
    <Styles.FiltersWrapper>
      <h3>Filters</h3>
      <Styles.FiltersContainer>{categoriesMap}</Styles.FiltersContainer>
    </Styles.FiltersWrapper>
  );
}

SidebarComponent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
