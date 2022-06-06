import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Category from "./Category";

const Styles = styled.div`
  .cards-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
	  justify-content: center;
	  margin: 2.5em auto;
  }
	
	h3 {
		font-size: 2.4em;
		font-weight: lighter;
		margin-top: 2em;
	}
`


const Categories = props => {
	const {categories} = props;
	
	const renderCategories = () => {
		return categories.map(category => {
			const {data: categoryInfo} = category;
			return (
				<Category
					properties={categoryInfo}
					key={category.id}
				/>
			)
		});
	}
	
	return (
		<Styles>
			<h3>Categories</h3>
			<div className="cards-container">
				{renderCategories()}
			</div>
		</Styles>
	);
};

Categories.propTypes = {
	categories: PropTypes.array.isRequired,
};

export default Categories;
