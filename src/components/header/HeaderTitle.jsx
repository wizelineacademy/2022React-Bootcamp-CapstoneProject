import React from 'react';
import styled from "styled-components";

import Logo from '../logo/Logo';

const Styles = styled.div`
  .header-title {
    display: flex;
    flex-direction: row;
  }
	
	.header-logo {
		margin-right: 1em;
	}
`

const HeaderTitle = () => {
	return (
		<Styles>
			<div className="header-title">
				<div className="header-logo">
					<Logo width="50px" height="50px" />
				</div>
				<h3>Capstone Store</h3>
			</div>
		</Styles>
	);
};

export default HeaderTitle;
