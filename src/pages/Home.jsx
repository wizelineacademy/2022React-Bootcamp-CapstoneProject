import React from 'react';

import Slider from "../components/slider/Slider";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";

import rawCategories from "../mocks/en-us/product-categories.json";
import rawProducts from "../mocks/en-us/products.json";


const Home = () => {
	const { results: categoryList } = rawCategories;
	const { results: productList } = rawProducts;
	
	return (
		<>
			<Slider />
			<Categories categories={categoryList} />
			<Products products={productList} />
		</>
	);
};

export default Home;
