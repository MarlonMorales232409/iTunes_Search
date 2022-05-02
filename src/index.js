import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumDetails from "./components/AlbumDetails";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "animate.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/details" element={<AlbumDetails />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
