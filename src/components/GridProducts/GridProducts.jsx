import { useFilterContext } from '../../context/filter_context';
import { Wrapper } from './gridproducts.styled';
import Product from '../Product/Product';

function GridProducts() {
  /*  CONTEXT DESTRUCTURING */
  const { grid_products: featured } = useFilterContext();

  /* PRODUCTS MAPPING */
  const gridProducts = featured.map((product) => (
    <Product product={product} key={product.id} />
  ));

  return <Wrapper>{gridProducts}</Wrapper>;
}

export default GridProducts;
