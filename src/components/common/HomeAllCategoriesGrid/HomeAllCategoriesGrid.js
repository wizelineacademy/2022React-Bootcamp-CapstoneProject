import styled from "@emotion/styled";
import ProductCategories from "../../../mocks/en-us/product-categories.json";
import { createCategoriesAdapter } from "./../../../adapters/product-categories";
import { SectionHeading, SectionContainer } from "./../../../styled-components";
import { CategorieCard } from "../";

const GridContainer = styled.div`
  margin: 25px auto;
  display: grid;
  transition: 0.4s;
  grid-gap: 10px;
  padding: 20px 10px;

  @media (min-width: 588px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const HomeAllCategoriesGrid = () => {
  const categoriesData = createCategoriesAdapter(ProductCategories);

  return (
    <SectionContainer>
      <SectionHeading>Categories</SectionHeading>
      <GridContainer>
        {categoriesData.map((categorie) => (
          <CategorieCard key={categorie.id} {...categorie} />
        ))}
      </GridContainer>
    </SectionContainer>
  );
};

export default HomeAllCategoriesGrid;
