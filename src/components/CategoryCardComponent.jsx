import PropTypes from "prop-types";
import styles from "../styles/CategoryCard.module.css";

const CategoryCardComponent = ({ categoryInfo }) => {
  return (
    <div className={styles.card_style}>
      <a href={categoryInfo.href}>
        <img
          src={categoryInfo.data.main_image.url}
          alt={categoryInfo.data.main_image.alt}
        />
        <h3>{categoryInfo.data.name}</h3>
      </a>
    </div>
  );
};

CategoryCardComponent.propTypes = {
  categoryInfo: PropTypes.shape({
    data: PropTypes.shape({
      main_image: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCardComponent;
