import { Button } from "./../../../styled-components";
import { Bag, Search } from "./../../icons";
import { ActionsContainer, LinkAction } from "./styled";
import PropTypes from "prop-types";

const ProductActions = ({ activeClass, id }) => {
  return (
    <ActionsContainer activeClass={activeClass}>
      <Button>
        <Bag color="#FFF" />
      </Button>
      <Button>
        <LinkAction to={`/product/${id}`}>
          <Search fill="#FFF" />
        </LinkAction>
      </Button>
    </ActionsContainer>
  );
};

ProductActions.propTypes = {
  activeClass: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductActions;
