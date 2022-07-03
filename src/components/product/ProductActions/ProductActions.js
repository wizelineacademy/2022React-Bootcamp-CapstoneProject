import { Button } from "./../../../styled-components";
import { Bag, Search } from "./../../icons";
import { ActionsContainer, LinkAction } from "./styled";

const ProductActions = ({ activeClass, id }) => {
  return (
    <ActionsContainer activeClass={activeClass}>
      <Button>
        <Bag color="#FFF" />
      </Button>
      <Button>
        <LinkAction to={`product/${id}`}>
          <Search fill="#FFF" />
        </LinkAction>
      </Button>
    </ActionsContainer>
  );
};

export default ProductActions;
