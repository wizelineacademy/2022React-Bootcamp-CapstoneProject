// @vendors
import React from 'react';

// @mocks
import banners from '../../mocks/en-us/featured-banners.json';
import categories from '../../mocks/en-us/product-categories.json';
import products from '../../mocks/en-us/featured-products.json';

// @components
import Carousel from '../../components/carousel';
import InlineGrid from '../../components/inline-grid';
import MainGrid from '../../components/main-grid';

// @styles
import styles from './styles.module.scss';

const Home = () => {
	return (
		<div className={styles.container}>
			<Carousel data={banners.results} />
			<InlineGrid data={categories.results} />
			<MainGrid data={products.results} />
		</div>
	);
};

export default Home;
