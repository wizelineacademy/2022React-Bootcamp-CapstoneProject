import React from "react";
import styles from "./styles.module.scss";
import ShoppingCart from "../../assets/icons/shopping-cart";

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>velby</div>
			<div>
				<input
					className={styles.searchBar}
					placeholder='Search'
				/>
			</div>
			<div className={styles.cart}>
				<ShoppingCart />
			</div>
		</div>
	);
};

export default Header;
