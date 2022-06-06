import React from 'react';
import styled from "styled-components";
import { FiShoppingCart } from 'react-icons/fi'

const Styles = styled.a`
	span {
		cursor: pointer;
		font-size: 1.8em;
	}
`

const HeaderShoppingCart = () => {
	return (
		<Styles><span><FiShoppingCart /></span></Styles>
	)
}

export default HeaderShoppingCart;
