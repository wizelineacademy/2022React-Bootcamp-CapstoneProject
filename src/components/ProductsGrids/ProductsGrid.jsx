import PropTypes from 'prop-types';
import Wrapper from '../../styles/ProductGridWrapper.styled';
import Product from './Product/Product';

const ProductsGrid = ({ products }) => (
    <Wrapper>
        <>
            {products?.results?.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </>
    </Wrapper>
);

ProductsGrid.propTypes = {
    products: PropTypes.object.isRequired,
};

export default ProductsGrid;
