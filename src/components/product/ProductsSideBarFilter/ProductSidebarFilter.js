import {
  Sidebar,
  ImageContainer,
  LabelInput,
  Input,
  Heading,
  CloseAction,
} from "./styled";
import Categories from "../../../mocks/en-us/product-categories.json";
import { createCategoriesAdapter } from "../../../adapters";
import { Cross } from "../../icons";
const ProductSidebarFilter = ({ setFilter, display, toggleFilter }) => {
  const categoriesData = createCategoriesAdapter(Categories);

  const handleToggle = (e) => {
    const target = e.target;
    const value = target.value.toLowerCase().replace(/ /g, "");
    const checked = target.checked;

    if (checked) {
      setFilter((filters) => [...filters, value]);
    } else {
      setFilter((filters) => filters.filter((filter) => filter !== value));
    }
  };

  return (
    <Sidebar display={display}>
      <CloseAction onClick={toggleFilter}>
        <Cross />
      </CloseAction>
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
