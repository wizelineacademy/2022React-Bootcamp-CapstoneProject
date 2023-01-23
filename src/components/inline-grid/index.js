// @styles
import styles from "./styles.module.scss";
import PropTypes, { array } from "prop-types";

const InlineGrid = ({ data }) => {
	return (
		<section className={styles.container}>
			{data.map((item) => {
				const { name, main_image: mainImg } = item.data;
				const imgStyle = {
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${mainImg.url})`,
					height: mainImg.height,
					width: mainImg.width,
				};

				return (
					<button
						className={styles.item}
						style={imgStyle}>
						<span>{name}</span>
					</button>
				);
			})}
		</section>
	);
};

InlineGrid.propTypes = {
	data: array,
};

export default InlineGrid;
