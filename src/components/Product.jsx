import PropTypes from 'prop-types';
import { Wrapper } from './_products';
import { formatPrice } from '../utils/helpers'

const Product = ({ product }) => {

	const {
		data:{
			category:{
				slug,
			},
			mainimage:{
				url,
				alt,
			},
			name,
			price,
		},
	} = product;

	return (
		<Wrapper>
			<div className='container'>
				<img
					src={ url } alt={ alt }
				/>
			</div>
			<div className='details'>
				<h5>
					{ name }
				</h5>
				<p>
					{ slug }
				</p>
			</div>
			<div className='counter'>
				{formatPrice(price)}
				</div>
		</Wrapper>
	 );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};


export default Product;