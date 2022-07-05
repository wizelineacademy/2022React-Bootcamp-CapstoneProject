import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardCategory = ({
  categoryName,
  imageUrl,
  imageAlt,
  categorySlug,
}) => {
  return (
    <>
      <Link to={`/products?category=${categorySlug}`}>
        <div>
          <h1>{categoryName}</h1>
          <div className="category-card">
            <img src={imageUrl} alt={imageAlt} />
          </div>
        </div>
      </Link>
    </>
  );
};

CardCategory.propTypes = {
  categoryName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  categorySlug: PropTypes.string.isRequired,
};

export default CardCategory;
