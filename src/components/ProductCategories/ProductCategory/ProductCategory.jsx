import PropTypes from 'prop-types';
import Cell from '../../../styles/ProductCategoryCell.styled';
import CategoryImage from '../../../styles/CategoryImage.styled';
import { Link } from 'react-router-dom';

const ProductCategory = ({ category }) => {
    return (
        <Link to={`/products?category=${category.id}`}>
            <Cell id={category.id}>
                <CategoryImage
                    src={category?.data?.main_image?.url}
                    alt={category?.data?.main_image?.alt}
                />
                {category?.data.name}
            </Cell>
        </Link>
    );
};

ProductCategory.propTypes = {
    category: PropTypes.object.isRequired,
};

export default ProductCategory;
