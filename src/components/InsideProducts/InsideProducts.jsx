import { useFilterContext } from '../../context/filter_context';
import { Wrapper } from './insideproducts.styled';
import Product from '../Product/Product';

function InsideProducts() {
  /*  CONTEXT DESTRUCTURING */
  const { filtered_products: featured } = useFilterContext();

  /* PRODUCTS MAPPING */
  const gridProducts = featured.map((product) => (
    <Product product={product} idproduct={product.id} key={product.id} />
  ));
  return <Wrapper>{gridProducts}</Wrapper>;
}

export default InsideProducts;
