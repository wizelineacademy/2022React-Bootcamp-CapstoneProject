import ProductCategory from './ProductCategory/ProductCategory';
import PropTypes from 'prop-types';
import Wrapper from '../../styles/ProductCategoriesWrapper.styled';
import Title from '../../styles/CategoriesTitle.styled';

const ProductCategories = ({ categories }) => {
  return (
    <div>
      <Title>Choose a category</Title>
      <Wrapper>
        {categories?.results.map(category => (
          <ProductCategory key={category.id} category={category}/>
        ))}
      </Wrapper>
    </div>
  );
};

ProductCategories.propTypes = {
  categories: PropTypes.object.isRequired,
};

export default ProductCategories;
