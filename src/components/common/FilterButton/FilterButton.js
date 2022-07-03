import { Button } from "../../../styled-components";
import Filter from "./../../icons/Filter";
import { ActionsContainer } from "./styled";
import PropTypes from "prop-types";

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

FilterButton.propTypes = {
  toggleFilter: PropTypes.func,
};

export default FilterButton;
