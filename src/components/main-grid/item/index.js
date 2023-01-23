import styles from "./styles.module.scss";

const GridITem = ({ data }) => {
	console.log("🚀 ~ file: index.js:4 ~ GridITem ~ data", data);
	const { name, category, price, mainimage: mainImg } = data;
	return (
		<div className={styles.item}>
			<img
				src={mainImg.url}
				width={mainImg.dimensions.width}
				height={mainImg.dimensions.height}
				alt={mainImg.alt}
			/>
			<p>{name}</p>
			<p>{category.slug}</p>
			<p>{price}</p>
		</div>
	);
};

export default GridITem;
