// @styles
import GridITem from "./item";
import styles from "./styles.module.scss";

const MainGrid = ({ data }) => {
	return (
		<div className={styles.container}>
			{data?.map((item) => (
				<GridITem data={item.data} />
			))}
		</div>
	);
};

export default MainGrid;
