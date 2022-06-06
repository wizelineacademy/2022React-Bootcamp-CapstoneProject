import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Product from "./Product";

const Styles = styled.div`
  .cards-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
	  justify-content: center;
	  margin: 2.5em auto;
  }
	
	h2 {
		font-size: 2.4em;
		font-weight: lighter;
		margin-top: 2em;
	}
`


const Products = props => {
	const { products } = props;
	
	const renderProducts = () => {
		return products.map(product => {
			const { data: productInfo } = product;
			return (
				<Product
					properties={productInfo}
					key={product.id}
				/>
			)
		});
	}
	
	return (
		<Styles>
			<h2>Capstone Products</h2>
			<div className="cards-container">
				{renderProducts()}
			</div>
		</Styles>
	);
};

Products.propTypes = {
	products: PropTypes.array.isRequired,
};

export default Products;
