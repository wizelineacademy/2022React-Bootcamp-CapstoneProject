// @styles
import GridITem from "./item";
import styles from "./styles.module.scss";

const MainGrid = ({ data, title }) => {
	return (
		<div className={styles.mainContainer}>
			<h3>{title}</h3>
			<div className={styles.container}>
				{data?.map((item) => (
					<GridITem data={item.data} />
				))}
			</div>
		</div>
	);
};

export default MainGrid;
