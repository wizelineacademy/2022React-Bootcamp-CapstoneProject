// @vendors
import React from 'react';

// @icons
import ShoppingCart from '../../assets/icons/shopping-cart';

// @styles
import styles from './styles.module.scss';

const Header = () => (
	<div className={styles.container}>
		<div className={styles.logo}>velby</div>
		<input className={styles.searchBar} placeholder="Search" />
		<button className={styles.cart}>
			<ShoppingCart />
		</button>
	</div>
);

export default Header;
