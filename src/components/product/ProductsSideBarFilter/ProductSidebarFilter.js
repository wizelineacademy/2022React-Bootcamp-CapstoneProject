import { useState } from "react";
import {
  Sidebar,
  ImageContainer,
  LabelInput,
  Input,
  Heading,
  CloseAction,
} from "./styled";
import { Cross } from "../../icons";
import { useProductCategories } from "./../../../utils";
import { SpinnerBounce } from "../../ui";
import { Button } from "../../../styled-components";

const ProductSidebarFilter = ({ setFilter, display, toggleFilter }) => {
  const { data: categoriesData, isLoading } = useProductCategories();
  const [isCheck, setIsCheck] = useState([]);

  const handleToggle = (e) => {
    const target = e.target;
    const value = target.value.toLowerCase().replace(/ /g, "");
    const { checked, id } = target;

    if (checked) {
      setFilter((filters) => [...filters, value]);
      setIsCheck([...isCheck, id]);
    } else {
      setFilter((filters) => filters.filter((filter) => filter !== value));
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  const clearFilters = () => {
    setFilter([]);
    setIsCheck([]);
  };

  return (
    <Sidebar display={display}>
      <CloseAction onClick={toggleFilter}>
        <Cross />
      </CloseAction>
      <Heading>Filter by Categorie</Heading>

      {isLoading ? (
        <SpinnerBounce />
      ) : (
        categoriesData?.map((categorie) => (
          <LabelInput key={categorie.id}>
            <Input
              id={categorie.id}
              type="checkbox"
              key={categorie.id}
              name={categorie.name}
              value={categorie.name}
              onChange={handleToggle}
              checked={isCheck.includes(categorie.id)}
            />
            {categorie.name}
            <ImageContainer urlBg={categorie.urlImage} className="checkmark" />
          </LabelInput>
        ))
      )}

      {isCheck.length > 0 && <Button onClick={clearFilters}>Clear</Button>}
    </Sidebar>
  );
};

export default ProductSidebarFilter;
