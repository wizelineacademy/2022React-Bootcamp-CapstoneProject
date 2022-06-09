import PropTypes from "prop-types";
import styles from "./Banner.module.css";

const BannerComponent = ({ bannerInfo, index, activeBanner }) => {
  const displayStyle =
    index === activeBanner ? styles.show_banner : styles.hide_banner;

  return (
    <a
      className={`${styles.banner} ${displayStyle}`}
      href={bannerInfo.data.cta_link}
    >
      <img
        src={bannerInfo.data.main_image.url}
        alt={bannerInfo.data.main_image.alt}
      />
      <div className={styles.fixed_message}>
        <h3>{bannerInfo.data.title}</h3>
        <p>{bannerInfo.data.description[0].text}</p>
      </div>
    </a>
  );
};

BannerComponent.propTypes = {
  bannerInfo: PropTypes.shape({
    data: PropTypes.shape({
      main_image: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.array.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  activeBanner: PropTypes.number.isRequired,
};

export default BannerComponent;
