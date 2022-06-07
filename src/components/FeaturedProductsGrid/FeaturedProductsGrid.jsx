
import PropTypes from 'prop-types';
import Product from './Product/Product';
import Wrapper from '../../styles/FeatureProducsGridWrapper.styled';

const FeaturedProductGrid = ({ products }) => {
  return (
    <Wrapper>
      {products?.results.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Wrapper>
  );
};

FeaturedProductGrid.propTypes = {
  products: PropTypes.object.isRequired,
};

export default FeaturedProductGrid;
