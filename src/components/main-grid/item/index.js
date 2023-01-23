import styles from "./styles.module.scss";

const GridITem = ({ data }) => {
	console.log("🚀 ~ file: index.js:4 ~ GridITem ~ data", data);
	const { name, category, price, mainimage: mainImg } = data;
	const imgStyle = {
		backgroundImage: `url(${mainImg.url})`,
		height: mainImg.height,
		width: mainImg.width,
	};

	return (
		<div
			className={styles.item}
			style={imgStyle}>
			<div className={styles.itemInfo}>
				<p className={styles.name}>{name}</p>
				<p className={styles.category}>{category.slug}</p>
				<p className={styles.price}>{`$${price}`}</p>
			</div>
		</div>
	);
};

export default GridITem;
