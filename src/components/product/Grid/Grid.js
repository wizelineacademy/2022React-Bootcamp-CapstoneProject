import { ProductCard } from "..";
import { ProductsGrid } from "../../../styled-components";
import PropTypes from "prop-types";
const Grid = ({ productsList }) => {
  return (
    <ProductsGrid>
      {productsList.length > 0 ? (
        productsList?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>No results</h1>
      )}
    </ProductsGrid>
  );
};

Grid.propTypes = {
  productsList: PropTypes.array.isRequired,
};

export default Grid;
