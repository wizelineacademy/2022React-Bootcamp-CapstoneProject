import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import PropTypes from "prop-types";
import * as Styles from "./button-slider-styles";

const BtnSliderComponent = ({ direction, moveSlide }) => {
  return (
    <Styles.ButtonSlider
      onClick={moveSlide}
      className={direction === "next" ? "next" : "prev"}
    >
      {direction === "next" ? (
        <FaArrowAltCircleRight />
      ) : (
        <FaArrowAltCircleLeft />
      )}
    </Styles.ButtonSlider>
  );
};

BtnSliderComponent.propTypes = {
  direction: PropTypes.string.isRequired,
  moveSlide: PropTypes.func.isRequired,
};

export default BtnSliderComponent;
