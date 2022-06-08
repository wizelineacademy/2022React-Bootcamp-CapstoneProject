import PropTypes from "prop-types";
import styles from "../styles/Banner.module.css";

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
  bannerInfo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  activeBanner: PropTypes.number.isRequired,
};

export default BannerComponent;
