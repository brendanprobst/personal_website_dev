import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/landingPage.js";

export default function InitialRouter() {
	return (
		<div id="app-container">
			<Routes>
				<Route path="/" element={<LandingPage />} />
			</Routes>
		</div>
	);
}
