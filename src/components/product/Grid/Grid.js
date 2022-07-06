import { ProductCard } from "..";
import { ProductsGrid } from "../../../styled-components";

const Grid = ({ productsList = [] }) => {
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

export default Grid;
