import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "../styles/BtnSlider.module.css";

const BtnSlider = ({ direction, moveSlide }) => {
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

BtnSlider.propTypes = {
  direction: PropTypes.string.isRequired,
  moveSlide: PropTypes.func.isRequired,
};

export default BtnSlider;
