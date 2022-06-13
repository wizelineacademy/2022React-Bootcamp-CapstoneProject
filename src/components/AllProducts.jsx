import React, { useState } from 'react';

import { Wrapper } from "./allproducts.styled";
import { Aside, InsideProducts } from "./";
import Pagination from './Pagination';

const AllProducts = () => {

	const [activecat, setActiveCat ] = useState([]);

	const switchActiveCat = idactive => {

		if ( activecat.indexOf(idactive) === -1 ){
			setActiveCat([
				...activecat,
				idactive,
			]);
		} else {
			let nevActivecat = activecat.filter((item) => {
				return item !== idactive;
			});
			setActiveCat(nevActivecat);
		}

	}

	return (
		<Wrapper className='inside'>
			<h1>This is the Product List Page</h1>
			<Aside switchActiveCat={ switchActiveCat } activecat={ activecat } />
			<section className="products">
				<InsideProducts  activecat={ activecat } />
				<Pagination />
			</section>
		</Wrapper>
	 );
}

export default AllProducts;