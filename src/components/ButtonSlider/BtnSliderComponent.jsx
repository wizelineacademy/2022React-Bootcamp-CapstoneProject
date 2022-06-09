import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "./BtnSlider.module.css";

const BtnSliderComponent = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={
        direction === "next"
          ? `${styles.btn_slide} ${styles.next}`
          : `${styles.btn_slide} ${styles.prev}`
      }
    >
      {direction === "next" ? (
        <FaArrowAltCircleRight />
      ) : (
        <FaArrowAltCircleLeft />
      )}
    </button>
  );
};

BtnSliderComponent.propTypes = {
  direction: PropTypes.string.isRequired,
  moveSlide: PropTypes.func.isRequired,
};

export default BtnSliderComponent;
