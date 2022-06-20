import { Button } from "../../../styled-components";
import Filter from "./../../icons/Filter";
import { ActionsContainer } from "./styled";

const FilterButton = ({ toggleFilter }) => {
  return (
    <ActionsContainer>
      <Button onClick={toggleFilter}>
        <Filter />
      </Button>
      <span>Filter</span>
    </ActionsContainer>
  );
};

export default FilterButton;
