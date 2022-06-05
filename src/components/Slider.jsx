import PropTypes from "prop-types";
import Banner from "./Banner";
import BtnSlider from "./BtnSlider";
import styles from "../styles/Slider.module.css";

const Slider = ({ images, prevSlide, nextSlide, activeBanner }) => {
  const banners = images.map((image, index) => (
    <Banner
      key={image.id}
      bannerInfo={image}
      index={index}
      activeBanner={activeBanner}
    />
  ));
  return (
    <div className={styles.slider}>
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <div className={styles.banners_container}>{banners}</div>
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.array.isRequired,
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
  activeBanner: PropTypes.number.isRequired,
};

export default Slider;
