import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/landingPage.js";
import AboutMe from "@/pages/aboutMe";
import Header from "@/components/shared/header";

export default function InitialRouter() {
	return (
		<div id="app">
			<Header />
			<div id="app-container">
				<Routes>
					<Route path="/about_me" element={<AboutMe />} />
					<Route path="/" element={<LandingPage />} />
				</Routes>
			</div>
		</div>
	);
}