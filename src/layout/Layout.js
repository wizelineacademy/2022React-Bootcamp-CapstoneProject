// @vendors
import React from 'react';

// @components
import Header from './header';
import Footer from './footer';

// @styles
import styles from './styles.module.scss';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className={styles.container}>{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
