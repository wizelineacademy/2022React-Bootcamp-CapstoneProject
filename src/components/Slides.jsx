import PropTypes from 'prop-types';
import { Wrapper } from "./slides.styled.js";

const Slides = ({ slide }) => {

	/* SLIDE DESTRUCTURING */
	const {
		data:{
			title,
			main_image:{
				url,
				dimensions: {
					width,
					height,
				},
			},
		},
	} = slide;

	return (
		<Wrapper>
			<img
				src={ url }
				alt={ title }
				width= { width }
				height= { height }
			/>
		</Wrapper>
	)
}

/* SLIDE PROPTYPES */
Slides.propTypes = {
  slide: PropTypes.object.isRequired,
};

export default Slides;