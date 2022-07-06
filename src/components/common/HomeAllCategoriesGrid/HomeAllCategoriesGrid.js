import { useProductCategories } from "../../../utils";
import { SectionHeading, SectionContainer } from "./../../../styled-components";
import { CategorieCard } from "../";
import { GridContainer } from "./styled";
import { SpinnerBounce } from "../../ui";

const HomeAllCategoriesGrid = () => {
  const { data: categoriesData, isLoading } = useProductCategories();
  return (
    <SectionContainer>
      <SectionHeading>Categories</SectionHeading>
      {isLoading ? (
        <SpinnerBounce />
      ) : (
        <GridContainer>
          {categoriesData?.map((categorie) => (
            <CategorieCard key={categorie.id} {...categorie} />
          ))}
        </GridContainer>
      )}
    </SectionContainer>
  );
};

export default HomeAllCategoriesGrid;
