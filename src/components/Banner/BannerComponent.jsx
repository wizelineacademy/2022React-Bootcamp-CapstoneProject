import PropTypes from "prop-types";
import * as Styles from "./banner-styles";

const BannerComponent = ({ bannerInfo, index, activeBanner }) => {
  const displayStyle = index === activeBanner ? "show_banner" : "hide_banner";

  return (
    <Styles.StyledBanner
      className={`${displayStyle}`}
      href={bannerInfo.data.cta_link}
    >
      <img
        src={bannerInfo.data.main_image.url}
        alt={bannerInfo.data.main_image.alt}
      />
      <Styles.FixedMessage>
        <h3>{bannerInfo.data.title}</h3>
        <p>{bannerInfo.data.description[0].text}</p>
      </Styles.FixedMessage>
    </Styles.StyledBanner>
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
