import PropTypes from 'prop-types';
import Product from './Product/Product';
import Wrapper from '../../styles/FeatureProducsGridWrapper.styled';
import Spinner from 'react-bootstrap/Spinner';

const FeaturedProductGrid = ({ products, isLoading, limit }) => {
    return isLoading ? (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    ) : (
        <Wrapper>
            {products?.results.slice(0,limit).map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </Wrapper>
    );
};

FeaturedProductGrid.propTypes = {
    products: PropTypes.object.isRequired,
};

export default FeaturedProductGrid;
