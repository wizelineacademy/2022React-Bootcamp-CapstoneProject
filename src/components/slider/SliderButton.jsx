import React from 'react';
import PropTypes from 'prop-types';

import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";
import styled from "styled-components";


const Styles = styled.div`
  .btn-slide {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #f1f1f1;
    border: 1px solid rgba(34, 34, 34, 0.287);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .btn-slide img {
    width: 25px;
    height: 25px;
    pointer-events: none;
  }

  .prev {
    top: 50%;
    left: 20px;
    transform: translateY(-60%);
  }
  .next {
    top: 50%;
    right: 20px;
    transform: translateY(-60%);
  }
`

const SliderButton = ({ direction, move}) => {
	return (
		<Styles>
			<button
				onClick={move}
				className={ direction === "next" ? "btn-slide next" : "btn-slide prev" }
			>
				<img src={direction === "next" ? rightArrow : leftArrow} alt="arrow" />
			</button>
		</Styles>
	);
};

SliderButton.propTypes = {
	direction: PropTypes.string.isRequired,
	move: PropTypes.func.isRequired,
};

export default SliderButton;
