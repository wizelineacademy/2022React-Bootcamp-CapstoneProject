// @vendors
import { array, string } from 'prop-types';

// @components
import GridITem from './grid-item';

// @styles
import styles from './styles.module.scss';

const MainGrid = ({ data, title }) => {
	return (
		<div className={styles.mainContainer}>
			<h3>{title}</h3>
			<div className={styles.container}>
				{data?.map((item) => (
					<div key={item.id}>
						<GridITem data={item.data} />
					</div>
				))}
			</div>
		</div>
	);
};

MainGrid.propTypes = {
	data: array.isRequired,
	title: string,
};

MainGrid.defaultProps = {
	data: [],
	title: 'Our Products',
};

export default MainGrid;
