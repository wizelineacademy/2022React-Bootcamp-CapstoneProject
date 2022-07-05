import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CategoryInput from "./CategoryInput";
import {
  Sidebar,
  SidebarTitle,
  SidebarSection,
} from "../styled-components/products.styled.component";

import categories from "../../../mocks/product-categories.json";

const SidebarCategories = ({ categoriesFilter, setCategoriesFilter }) => {
  useEffect(() => {
    categories.results &&
      categories.results.forEach((category) =>
        setCategoriesFilter((categoriesFilter) => ({
          ...categoriesFilter,
          [category.id]: false,
        }))
      );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    setCategoriesFilter({
      ...categoriesFilter,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Sidebar>
      <SidebarTitle>Categories</SidebarTitle>
      <SidebarSection>
        {categories.results &&
          categories.results.map((category) => (
            <CategoryInput
              name={category.id}
              key={category.id}
              label={category.data.name}
              checked={categoriesFilter[category.id]}
              onChange={handleChange}
            />
          ))}
      </SidebarSection>
    </Sidebar>
  );
};

SidebarCategories.propTypes = {
  setCategoriesFilter: PropTypes.func.isRequired,
};

export default SidebarCategories;
