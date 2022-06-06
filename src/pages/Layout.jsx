import Content from "./Content";
import Header from "../components/header/Header";
import React from "react";
import Footer from "./Footer";

function Layout() {
	
	return (
		<div className="App">
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export default Layout;
