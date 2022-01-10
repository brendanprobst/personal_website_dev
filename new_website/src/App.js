import React, { useState, useEffect } from "react";
import "./styles/styles.scss";
import { ThemeProvider } from "@material-ui/core";
import "./styles/index.css";

import InitialRouter from "./navigation/initialRouter";
import MuiTheme from "./styles/muiTheme";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	const [isDark, setIsDark] = useState(true);
	const { theme } = MuiTheme(isDark);
	function toggleDarkMode() {
		setIsDark(!isDark);
	}
	function getTheme() {
		return isDark;
	}
	useEffect(() => {
		getTheme();
	}, []);
	const themeClass = `theme ${getTheme() ? "theme--dark" : "theme--light"}`;
	return (
		<ThemeProvider theme={theme}>
			<div className={themeClass}>
				<Router>
					<InitialRouter />
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;
