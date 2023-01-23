// @vendors
import { object, string } from 'prop-types';

// @styles
import styles from './styles.module.scss';

const GridITem = ({ data }) => {
	const { name, category, price, mainimage: mainImg } = data;
	const imgStyle = {
		backgroundImage: `url(${mainImg.url})`,
		height: mainImg.height,
		width: mainImg.width,
	};

	return (
		<div key={category.id} className={styles.item} style={imgStyle}>
			<div className={styles.itemInfo}>
				<p className={styles.name}>{name}</p>
				<p className={styles.category}>{category.slug}</p>
				<p className={styles.price}>{`$${price}`}</p>
			</div>
		</div>
	);
};

GridITem.propTypes = {
	data: object,
};

GridITem.defaultProps = {
	data: {},
};

export default GridITem;
