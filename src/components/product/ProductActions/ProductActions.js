import { Button } from "./../../../styled-components";
import { Bag, Search } from "./../../icons";
import { ActionsContainer } from "./styled";

const ProductActions = ({ activeClass }) => {
  return (
    <ActionsContainer activeClass={activeClass}>
      <Button>
        <Bag color="#FFF" />
      </Button>
      <Button>
        <Search fill="#FFF" />
      </Button>
    </ActionsContainer>
  );
};

export default ProductActions;
