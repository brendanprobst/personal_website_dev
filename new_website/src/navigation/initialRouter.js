import React, { Fragment } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import AboutMe from "../pages/aboutMe";
import Header from "../components/shared/header";
// import VisWithHooks from "../three/cube";

export default function InitialRouter() {
	return (
		<div id="app-container">
			<Router>
				<Header id="app-header" />
				<div id="body">
					<Route path="/about_me">
						<AboutMe />
					</Route>
					<Route path="/">
						<LandingPage />
					</Route>
				</div>
			</Router>
		</div>
	);
}
