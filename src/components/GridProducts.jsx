import featuredProducts from '../utils/mocks/featured-products.json';
import { Wrapper } from './_grid';
import Product from './Product';

const GridProducts = () => {

	const { results } = featuredProducts;

	const gridProducts = results.map((product, index) => (
		<Product product={ product } key={ product.id } />
	));

	return (
		<>
			<h1>Products</h1>
			<Wrapper>
				{ gridProducts }
			</Wrapper>
		</>
	 );
}

export default GridProducts;