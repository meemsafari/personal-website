import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Layout.scss'

const Layout = ({children}) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout;
