import React from "react";
import styled from "styled-components";

import HeaderShoppingCart from "./HeaderShoppingCart";
import HeaderTitle from "./HeaderTitle";
import SearchField from "./SearchField";
import { device } from "../../utils/constants";


const Styles = styled.div`
  header{
    overflow: hidden;
    background-color: #fcff92;
    padding: 20px 10px;
    display: flex;
    flex-direction: row;
	  flex-wrap: wrap;
    justify-content: space-between;
  }

  .header-home{
    width: 60%;
    display: flex;
	  margin-left: 2em;
    flex-direction: row;
	  cursor: pointer;
  }

  .header-search{
    width: 30%;
    display: flex;
    flex-direction: row;
	  justify-content: flex-end;
	  align-items: center;
	  margin-right: 3em;
  }
	
	.shopping-cart{
		display: flex;
		margin-right: 1em;
		align-items: center;
	}

  @media screen and ${device.tablet} {
	  .header{
		  flex-direction: column;
	  }
    .header-search{
      align-items: center;
      justify-content: center;
	    width: 100%;
      margin: 0 auto;
    }
	  .header-home{
      align-items: center;
      justify-content: center;
		  width: 100%;
		  margin: 0 auto;
	  }
  }
`

const Header = () => {
	
	return (
		<Styles>
			<header>
				<div className="header-home"><HeaderTitle /></div>
				<div className="header-search">
					<div className="shopping-cart">
						<HeaderShoppingCart/>
					</div>
					<SearchField changeSearchField={() => {}}/>
				</div>
			</header>
		</Styles>
	);
};

export default Header;
