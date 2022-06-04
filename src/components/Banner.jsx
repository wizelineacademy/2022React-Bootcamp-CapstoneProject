// import PropTypes from "prop-types";

const Banner = ({ bannerInfo, index, activeBanner }) => {
  const displayStyle =
    index === activeBanner ? { display: "block" } : { display: "none" };
  return (
    <a href={bannerInfo.data.cta_link} style={displayStyle}>
      <picture>
        <img
          src={bannerInfo.data.main_image.url}
          alt={bannerInfo.data.main_image.alt}
        />
      </picture>
      <div>
        <h3>{bannerInfo.data.title}</h3>
        <p>{bannerInfo.data.description[0].text}</p>
      </div>
    </a>
  );
};

export default Banner;
