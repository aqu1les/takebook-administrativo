import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Layout/Header";
import Router from "./router";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Router />
		</BrowserRouter>
	);
}
