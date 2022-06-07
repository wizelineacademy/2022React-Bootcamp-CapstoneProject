import PropTypes from 'prop-types';
import Cell from '../../../styles/ProductCategoryCell.styled';
import CategoryImage from '../../../styles/CategoryImage.styled';

const ProductCategory = ({ category }) => {
  return (
    <Cell>
      <CategoryImage
        src={category?.data?.main_image?.url}
        alt={category?.data?.main_image?.alt}
      />
      {category?.data.name}
    </Cell>
  );
};

ProductCategory.propTypes = {
  category: PropTypes.object.isRequired,
};

export default ProductCategory;
