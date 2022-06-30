import PropTypes from 'prop-types';
import ProductImage from '../../../styles/ProducImage.styled';
import Cell from '../../../styles/Cell.styled';
import PricePill from '../../../styles/PricePill.styled';
import CategoryPill from '../../../styles/CategoryPill.styled';
import PillsWrapper from '../../../styles/PillsWrapper.styled';
import ProductName from '../../../styles/ProductName.styled';
import { CartCheckFill, FileTextFill } from 'react-bootstrap-icons';
import CartPill from '../../../styles/CartAddButton.styled';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    product.data && (
      <Cell>
        <ProductImage
          src={product.data.mainimage?.url}
          alt={product.data.mainimage?.alt}
        />
        <PillsWrapper>
          <ProductName>{product.data.name}</ProductName>
          <CategoryPill>{product.data.category.slug}</CategoryPill>
          <PricePill>$ {product.data.price}</PricePill>
          <CartPill type="button">
            <CartCheckFill style={{color: "white"}}/>
          </CartPill>
          <Link to={`/product/${product.id}`}>
            <CartPill type="button" style={{backgroundColor:"#2E0249"}}>
              <FileTextFill style={{color: "white"}}/>
            </CartPill>
          </Link>
        </PillsWrapper>
      </Cell>
    )
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
