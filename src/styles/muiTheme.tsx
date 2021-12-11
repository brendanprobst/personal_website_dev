import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import themeStyle from "./theme.style";
import ThemeToggle from "./themeToggle";

export default function MuiTheme() {
	const { getDarkMode } = ThemeToggle();
	useEffect(() => {
		console.log(getDarkMode());
	}, []);

	const theme = createTheme({
		palette: {
			primary: {
				main: themeStyle.COLOR_PRIMARY_DEFAULT,
				light: themeStyle.COLOR_PRIMARY_LIGHT,
				contrastText: themeStyle.COLOR_TEXT_DARK,
			},
			secondary: {
				main: getDarkMode()
					? themeStyle.COLOR_BUTTON_DARK
					: themeStyle.COLOR_BUTTON_LIGHT,
				light: getDarkMode()
					? themeStyle.COLOR_BUTTON_DARK_HOVER
					: themeStyle.COLOR_BUTTON_LIGHT_HOVER,
				contrastText: getDarkMode()
					? themeStyle.COLOR_TEXT_DARK
					: themeStyle.COLOR_TEXT_LIGHT,
			},
		},
	});
	theme.props = {
		MuiButton: {
			disableElevation: true,
			// disableRipple: true,
			variant: "contained",
			color: "primary",
		},
		MuiCheckBox: {
			disableRipple: true,
		},
		MuiInputLabel: {
			color: getDarkMode()
				? themeStyle.COLOR_TEXT_DARK
				: themeStyle.COLOR_TEXT_LIGHT,
		},
		MuiInput: {
			// disableUnderline: true,s
		},
		MuiTextField: {
			variant: "outlined",
			InputLabelProps: {
				shrink: true,
			},
		},
	};
	theme.overrides = {
		//BUTTONS
		MuiButton: {
			root: {
				textTransform: "none",
			},
			containedPrimary: {
				backgroundColor: theme.palette.primary.main,
				outlineWidth: 2,
				outlineStyle: "solid",
				outlineColor: "transparent",
				outlineOffset: -2,
				"&:hover": {
					backgroundColor: theme.palette.primary.light,
					outlineWidth: 2,
					outlineStyle: "solid",
					outlineColor: theme.palette.primary.light,
					outlineOffset: -2,
				},
			},
			containedSecondary: {
				backgroundColor: theme.palette.secondary.main,
				outlineWidth: 2,
				outlineStyle: "solid",
				outlineColor: "transparent",
				outlineOffset: -2,

				"&:hover": {
					outlineWidth: 2,
					outlineStyle: "solid",
					outlineColor: getDarkMode()
						? themeStyle.COLOR_BORDER_DARK
						: themeStyle.COLOR_BORDER_LIGHT,
					outlineOffset: -2,
				},
			},
		},

		// TEXT INPUTS
		MuiTextField: {
			root: {
				margin: 5,
			},
		},
		MuiInputLabel: {
			root: {
				color: getDarkMode()
					? themeStyle.COLOR_TEXT_SECONDARY_DARK
					: themeStyle.COLOR_TEXT_SECONDARY_LIGHT,
			},
		},
		MuiInput: {
			borderWidth: 2,
			borderStyle: "solid",
			"&$focused": {
				borderColor: getDarkMode()
					? themeStyle.COLOR_TEXT_DARK
					: themeStyle.COLOR_TEXT_LIGHT,
			},
		},
		MuiOutlinedInput: {
			root: {
				borderColor: getDarkMode()
					? themeStyle.COLOR_BORDER_DARK
					: themeStyle.COLOR_BORDER_LIGHT,
				color: getDarkMode()
					? themeStyle.COLOR_TEXT_DARK
					: themeStyle.COLOR_TEXT_LIGHT,
			},
		},
		MuiFilledInput: {
			root: {
				backgroundColor: getDarkMode()
					? themeStyle.COLOR_TEXT_INPUT_DARK
					: themeStyle.COLOR_TEXT_INPUT_LIGHT,
				color: getDarkMode()
					? themeStyle.COLOR_TEXT_DARK
					: themeStyle.COLOR_TEXT_LIGHT,
			},
			"&:hover": {
				backgroundColor: "red",
			},
		},

		// MuiFilledInput: {
		// 	root: {
		// 		backgroundColor: getDarkMode()
		// 			? themeStyle.COLOR_TEXT_INPUT_DARK
		// 			: themeStyle.COLOR_TEXT_INPUT_LIGHT,
		// 		"&:hover": {
		// 			backgroundColor: getDarkMode()
		// 				? themeStyle.COLOR_BORDER_LIGHT
		// 				: themeStyle.COLOR_TEXT_DARK,
		// 		},
		// 	},
		// },
		// MuiOutlinedInput: {
		// 	root: {
		// 		backgroundColor: getDarkMode()
		// 			? themeStyle.COLOR_FOREGROUND_DARK
		// 			: themeStyle.COLOR_FOREGROUND_LIGHT,
		// 	},
		// },
		//
		// },
	};
	return {
		theme,
	};
}
