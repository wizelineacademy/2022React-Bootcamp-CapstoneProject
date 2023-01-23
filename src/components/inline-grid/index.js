// @vendors
import { array } from 'prop-types';

// @styles
import styles from './styles.module.scss';

const InlineGrid = ({ data }) => {
	return (
		<section className={styles.container}>
			{data?.map((item) => {
				const { name, main_image: mainImg } = item.data;
				const imgStyle = {
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${mainImg.url})`,
					height: mainImg.height,
					width: mainImg.width,
				};

				return (
					<button key={item.id} className={styles.item} style={imgStyle}>
						<span>{name}</span>
					</button>
				);
			})}
		</section>
	);
};

InlineGrid.propTypes = {
	data: array.isRequired,
};

InlineGrid.defaultProps = {
	data: [],
};

export default InlineGrid;
