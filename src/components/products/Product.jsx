import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import truncate from "../../utils/truncate";

const Styles = styled.div`
  .card {
    width: 20em;
    height: 32em;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 1em;
    cursor: pointer;
    border-radius: 5%;
    margin: 3em 10px;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .card-img {
    border-bottom: 1px solid grey;
  }

  .card-img img {
    width: 100%;
  }

  .card-content {
    padding: 2px 16px;
  }

  .card-content h4 {
    font-size: 1.5em;
    font-weight: lighter;
  }

  .card-btn {
    width: 100%;
    height: 50px;
    border-radius: 4%;
    font-weight: bold;
    font-size: 1em;
    color: white;
    background-color: #699c31;
    border: 0;
    cursor: pointer;
  }

  .card-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .card-info .category {
    color: white;
    background-color: #aaad61;
	  border-radius: 10%;
    padding: 5px;
  }
`


const Product = props => {
	const { properties } = props;
	
	const renderProductCard = () => {
		const { mainimage: image } = properties
		
		return (
			<div className="card">
				<div className="card-image">
					<img src={image?.url} alt="Avatar" width="150px" height="200px" />
				</div>
				<div className="card-content">
					<div className="card-title">
						<h4>{properties?.name}</h4>
					</div>
					<div className="card-info">
						<span className="price">${properties?.price}</span>
						<span className="category">{properties?.category?.slug}</span>
					</div>
					<p>{ truncate(properties?.description[0].text, 95)}</p>
					<button className="card-btn">Add to Card</button>
				</div>
			</div>
		)
	}
	
	return (
		<Styles>
			{renderProductCard()}
		</Styles>
	);
};

Product.propTypes = {
	properties: PropTypes.shape({
		name: PropTypes.string.isRequired,
		mainimage: PropTypes.object.isRequired,
	}).isRequired,
};

export default Product;
