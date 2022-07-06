import { Button } from "./../../../styled-components";
import { Bag, Search } from "./../../icons";
import { ActionsContainer, LinkAction } from "./styled";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "./../../../context";

const ProductActions = ({ activeClass, product }) => {
  const { id } = product;

  const { addToCart } = useContext(ShopContext);

  return (
    <ActionsContainer activeClass={activeClass}>
      <Button onClick={() => addToCart({ ...product, quantity: 1 })}>
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
  product: PropTypes.object.isRequired,
};

export default ProductActions;
