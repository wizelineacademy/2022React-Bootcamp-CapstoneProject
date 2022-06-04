import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
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

export default BtnSlider;
