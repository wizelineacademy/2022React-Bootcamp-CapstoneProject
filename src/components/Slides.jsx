import PropTypes from 'prop-types';
import { Wrapper } from "./_slides";

const Slides = ({ slide }) => {

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

Slides.propTypes = {
  slide: PropTypes.object.isRequired,
};

export default Slides;