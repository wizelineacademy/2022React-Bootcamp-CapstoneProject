import { Sidebar, ImageContainer, LabelInput, Input, Heading } from "./styled";
import Categories from "../../../mocks/en-us/product-categories.json";
import { createCategoriesAdapter } from "../../../adapters";
const ProductSidebarFilter = ({ handleToggle }) => {
  const categoriesData = createCategoriesAdapter(Categories);
  return (
    <Sidebar>
      <Heading>Filter by Categorie</Heading>
      {categoriesData.map((categorie) => (
        <LabelInput key={categorie.id}>
          <Input
            type="checkbox"
            key={categorie.id}
            name={categorie.name}
            value={categorie.name}
            onChange={handleToggle}
          />
          {categorie.name}
          <ImageContainer urlBg={categorie.urlImage} className="checkmark" />
        </LabelInput>
      ))}
    </Sidebar>
  );
};

export default ProductSidebarFilter;
