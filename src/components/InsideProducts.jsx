import featuredProducts from '../utils/mocks/featured-products.json';
import { Wrapper } from './grid.styled';
import { Product } from './';

const InsideProducts = ({ activecat }) => {

	/* RESULTS DESTRUCTURING */
	const { results } = featuredProducts;

	/* PRODUCTS MAPPING */
	const gridProducts = results.map((product, index) => (
		<Product
			product={ product }
			key={ product.id }
			activecat={ activecat }
		/>
	));

	return (
		<>
			<Wrapper>
				{ gridProducts }
			</Wrapper>
		</>
	 );
}

export default InsideProducts;