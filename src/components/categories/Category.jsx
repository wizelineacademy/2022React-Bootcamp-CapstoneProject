import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Styles = styled.div`
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
	  margin: 0 .9em;
	  cursor: pointer;
	  border-radius: 5%;
	  margin: 20px 20px;
  }
	
	.card img {
    width: 100%;
	}

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .container {
    padding: 2px 16px;
  }
`


const Category = props => {
	const {properties} = props;
	
	const renderCategoryCard = () => {
		const { main_image: image } = properties
		
		return (
			<div className="card">
				<img src={image?.url} alt="Avatar" width="150px" height="200px" />
				<div className="container">
					<h4>{properties?.name}</h4>
				</div>
			</div>
		)
	}
	
	return (
		<Styles>
			{renderCategoryCard()}
		</Styles>
	);
};

Category.propTypes = {
	properties: PropTypes.shape({
		name: PropTypes.string.isRequired,
		main_image: PropTypes.object.isRequired,
	}).isRequired,
};

export default Category;
