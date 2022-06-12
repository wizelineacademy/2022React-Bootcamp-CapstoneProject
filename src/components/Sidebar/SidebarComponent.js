import PropTypes from "prop-types";
import * as Styles from "./sidebar-styles";

export default function SidebarComponent({ categories, setFilters }) {
  const handleFilter = (e) => {
    if (e.target.name !== undefined) {
      if (e.target.checked === true) {
        setFilters((oldFilters) => [
          ...oldFilters,
          e.target.name.toLowerCase(),
        ]);
      } else {
        setFilters((oldFilters) => {
          const idx = oldFilters.indexOf(e.target.name.toLowerCase());
          return [...oldFilters.splice(idx, 1)];
        });
      }
    }
  };

  const categoriesMap = categories.map((category) => (
    <Styles.ListItem
      key={category.id}
      name={category.data.name}
      onClick={(e) => handleFilter(e)}
      htmlFor={category.data.name}
    >
      <Styles.Label name={category.data.name} htmlFor={category.data.name}>
        {category.data.name}
      </Styles.Label>
      <input
        type="checkbox"
        id={category.data.name}
        name={category.data.name}
      />
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
