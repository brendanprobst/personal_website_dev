import React, { useState } from "react";

import "@/styles/styles.scss";
import InitialRouter from "@/navigation/initialRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import MuiTheme from "@/styles/muiTheme";
function App() {
	const { theme } = MuiTheme();
	const [isDark, setIsDark] = useState(true);

	function toggleDarkMode() {
		setIsDark(!isDark);
	}
	function getDarkMode() {
		return isDark;
	}

	return (
		<ThemeProvider theme={theme}>
			<div
				className={
					"theme " + (getDarkMode() ? "theme--dark" : "theme--default")
				}
			>
				<Router>
					<InitialRouter />
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;
