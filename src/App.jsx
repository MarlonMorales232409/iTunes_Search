import React from "react";
import Albums from "./components/Albums";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

const App = () => {
	return (
		<>
			<Nav />
			<Header />
			<Albums />
			<Footer />
		</>
	);
};

export default App;
