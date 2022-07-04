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
import PropTypes from "prop-types";

const ProductSidebarFilter = ({
  setFilter,
  display,
  toggleFilter,
  filters,
}) => {
  const { data: categoriesData, isLoading } = useProductCategories();

  const handleToggle = (e) => {
    const { checked, id } = e.target;

    checked
      ? setFilter((filters) => [...filters, id])
      : setFilter((filters) => filters.filter((filter) => filter !== id));
  };

  const clearFilters = () => {
    setFilter([]);
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
              value={categorie.id}
              onChange={handleToggle}
              checked={filters.includes(categorie.id)}
            />
            {categorie.name}
            <ImageContainer urlBg={categorie.urlImage} className="checkmark" />
          </LabelInput>
        ))
      )}

      {filters.length > 0 && <Button onClick={clearFilters}>Clear</Button>}
    </Sidebar>
  );
};

ProductSidebarFilter.propTypes = {
  setFilter: PropTypes.func,
  display: PropTypes.string,
  toggleFilter: PropTypes.func,
  filters: PropTypes.array,
};

export default ProductSidebarFilter;
