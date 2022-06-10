import PropTypes from "prop-types";
import * as Styles from "./category-card-styles";

const CategoryCardComponent = ({ categoryInfo }) => {
  return (
    <Styles.StyledCard>
      <a href={categoryInfo.href}>
        <Styles.CardImage
          src={categoryInfo.data.main_image.url}
          alt={categoryInfo.data.main_image.alt}
        />
        <h3>{categoryInfo.data.name}</h3>
      </a>
    </Styles.StyledCard>
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
