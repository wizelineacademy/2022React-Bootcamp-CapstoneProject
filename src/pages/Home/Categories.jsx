import React from "react";
import CategoryBanner from "./components/CategoryBanner";
import {
  Container,
  Title,
} from "./styled-components/category.styled.component";

import categories from "../../mocks/product-categories.json";

const Categories = () => {
  // console.log(categories);
  return (
    <div style={{ marginBottom: "48px", padding: "1rem" }}>
      <div>
        <Title>Categories</Title>
        <Container>
          {categories.results &&
            categories.results.map((category, index) => (
              <CategoryBanner
                key={category.id}
                image={category.data.main_image.url}
                title={category.data.name}
              />
            ))}
        </Container>
      </div>
    </div>
  );
};

export default Categories;
