import PropTypes from "prop-types";
import styles from "../styles/CategoryCard.module.css";

const CategoryCard = ({ categoryInfo }) => {
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

CategoryCard.propTypes = {
  categoryInfo: PropTypes.object.isRequired,
};

export default CategoryCard;
