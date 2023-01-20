// @vendors
import React from "react";

// @constants
import data from "../../mocks/en-us/featured-banners.json";
import categories from "../../mocks/en-us/product-categories.json";

// @components
import Carousel from "../../components/carousel";
import InlineGrid from "../../components/inline-grid";

// @styles
import styles from "./styles.module.scss";

const Home = ({ bannersData }) => {
	return (
		<div className={styles.container}>
			<Carousel data={data.results} />
			<InlineGrid data={categories.results} />
		</div>
	);
};

export default Home;
