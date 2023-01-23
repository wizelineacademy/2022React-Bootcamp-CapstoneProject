// @vendors
import React from 'react';

// @styles
import styles from './styles.module.scss';

const Footer = () => (
	<footer className={styles.container}>
		<p className={styles.footer}>
			<span className={styles.logo}>velby</span> <br />
			from the norwegian bokmål word
			<span className="bold italic"> velbygd</span> <br />
			"well-built, solidly built or constructed"
		</p>
		<p>Ecommerce created during Wizeline's Academy React Bootcamp</p>
	</footer>
);

export default Footer;
