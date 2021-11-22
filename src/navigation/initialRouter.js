import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/landingPage.js";
import AboutMe from "@/pages/aboutMe";

export default function InitialRouter() {
	return (
		<div id="app-container">
			<Routes>
				<Route path="/about_me" element={<AboutMe />} />
				<Route path="/" element={<LandingPage />} />
			</Routes>
		</div>
	);
}
