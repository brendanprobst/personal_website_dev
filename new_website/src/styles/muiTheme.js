import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import themeStyle from "./theme.style";

export default function MuiTheme({ isDark }) {
	const theme = createTheme({
		palette: {
			primary: {
				main: themeStyle.COLOR_PRIMARY_DEFAULT,
				light: themeStyle.COLOR_PRIMARY_LIGHT,
				contrastText: themeStyle.COLOR_TEXT_DARK,
			},
			secondary: {
				main: isDark
					? themeStyle.COLOR_BUTTON_DARK
					: themeStyle.COLOR_BUTTON_LIGHT,
				light: isDark
					? themeStyle.COLOR_BUTTON_DARK_HOVER
					: themeStyle.COLOR_BUTTON_LIGHT_HOVER,
				contrastText: isDark
					? themeStyle.COLOR_TEXT_DARK
					: themeStyle.COLOR_TEXT_LIGHT,
			},
		},
	});
	theme.props = {
		MuiButton: {
			disableElevation: true,
			variant: "contained",
			color: "primary",
		},
		MuiSwitch: {
			color: "primary",
			disableRipple: true,
		},
		MuiCheckBox: {
			disableRipple: true,
		},
		MuiInputLabel: {
			color: isDark ? themeStyle.COLOR_TEXT_DARK : themeStyle.COLOR_TEXT_LIGHT,
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
		MuiTooltip: {
			arrow: true,
		},
	};
	theme.overrides = {
		//BUTTONS
		MuiButton: {
			root: {
				textTransform: "none",
			},
			contained: {
				outlineWidth: 2,
				outlineStyle: "solid",
				outlineColor: "transparent",
				outlineOffset: -2,
				//disabled not working
				disabled: {
					backgroundColor: isDark
						? themeStyle.BTN_DISABLED_DARK
						: themeStyle.BTN_DISABLED_LIGHT,
					color: isDark
						? themeStyle.BTN_DISABLED_DARK
						: themeStyle.BTN_DISABLED_LIGHT,
				},
			},
			outlined: {
				outlineWidth: 1,
				outlineOffset: -1,
				outlineStyle: "solid",
				backgroundColor: "transparent",
				"&:hover": {
					outlineWidth: 2,
					outlineOffset: -2,
				},
			},
			text: {
				outlineStyle: "solid",
				outlineWidth: 2,
				outlineOffset: -2,
				paddingInline: 8,
				outlineColor: "transparent",
				"&:hover": {
					outlineStyle: "solid",
					outlineWidth: 2,
					outlineOffset: -2,
					paddingInline: 8,
					outlineColor: "inherit",
				},
			},
			containedPrimary: {
				backgroundColor: theme.palette.primary.main,
				"&:hover": {
					backgroundColor: theme.palette.primary.light,
					outlineColor: theme.palette.primary.main,
				},
			},
			outlinedPrimary: {
				outlineColor: theme.palette.primary.main,
				"&:hover": {},
			},

			containedSecondary: {
				backgroundColor: isDark
					? themeStyle.BTN_CONTAINED_BG_DARK
					: themeStyle.BTN_CONTAINED_BG_LIGHT,
				color: !isDark
					? themeStyle.COLOR_TEXT_DARK
					: themeStyle.COLOR_TEXT_LIGHT,
				outlineColor: isDark
					? themeStyle.COLOR_BUTTON_BORDER_DARK
					: themeStyle.COLOR_BUTTON_BORDER_LIGHT,

				"&:hover": {
					backgroundColor: isDark
						? themeStyle.BTN_CONTAINED_BG_HOVER_DARK
						: themeStyle.BTN_CONTAINED_BG_HOVER_LIGHT,
					outlineColor: isDark
						? themeStyle.COLOR_TEXT_DARK
						: themeStyle.COLOR_TEXT_LIGHT,
				},
			},
			outlinedSecondary: {
				color: isDark
					? themeStyle.BTN_OUTLINED_BORDER_DARK
					: themeStyle.BTN_OUTLINED_BORDER_LIGHT,
				outlineColor: isDark
					? themeStyle.BTN_OUTLINED_BORDER_DARK
					: themeStyle.BTN_OUTLINED_BORDER_LIGHT,
				"&:hover": {
					borderColor: isDark
						? themeStyle.BTN_OUTLINED_BORDER_HOVER_DARK
						: themeStyle.BTN_OUTLINED_BORDER_HOVER_LIGHT,
				},
			},
			textSecondary: {
				color: isDark
					? themeStyle.COLOR_TEXT_SECONDARY_DARK
					: themeStyle.COLOR_TEXT_SECONDARY_LIGHT,
				"&:hover": {
					color: isDark
						? themeStyle.COLOR_TEXT_DARK
						: themeStyle.COLOR_TEXT_LIGHT,
				},
			},

			sizeSmall: {
				padding: 2,
				paddingInline: 6,
				fontSize: 6,
			},
			sizeLarge: {
				padding: 20,
				paddingInline: 50,
			},
		},
		MuiSwitch: {
			root: {
				thumb: {
					backgroundColor: theme.palette.primary.main,
				},
			},
			checked: {
				MuiSwitchThumb: {
					backgroundColor: themeStyle.COLOR_ACCENT2_DEFAULT,
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
				color: isDark
					? themeStyle.COLOR_TEXT_SECONDARY_DARK
					: themeStyle.COLOR_TEXT_SECONDARY_LIGHT,
			},
		},
		MuiInput: {
			root: {
				borderWidth: 2,
				borderStyle: "solid",
				"&$focused": {
					borderColor: isDark
						? themeStyle.COLOR_TEXT_DARK
						: themeStyle.COLOR_TEXT_LIGHT,
					backgroundColor: isDark
						? themeStyle.COLOR_FOREGROUND_DARK
						: themeStyle.COLOR_FOREGROUND_LIGHT,
				},
			},
		},
		MuiOutlinedInput: {
			root: {
				borderColor: isDark
					? themeStyle.COLOR_BORDER_DARK
					: themeStyle.COLOR_BORDER_LIGHT,
				color: isDark
					? themeStyle.COLOR_TEXT_DARK
					: themeStyle.COLOR_TEXT_LIGHT,
			},
		},
		MuiFilledInput: {
			root: {
				backgroundColor: isDark
					? themeStyle.COLOR_TEXT_INPUT_DARK
					: themeStyle.COLOR_TEXT_INPUT_LIGHT,
				color: isDark
					? themeStyle.COLOR_TEXT_DARK
					: themeStyle.COLOR_TEXT_LIGHT,
			},
			"&:hover": {
				backgroundColor: "red",
			},
		},

		// MuiFilledInput: {
		// 	root: {
		// 		backgroundColor: isDark
		// 			? themeStyle.COLOR_TEXT_INPUT_DARK
		// 			: themeStyle.COLOR_TEXT_INPUT_LIGHT,
		// 		"&:hover": {
		// 			backgroundColor: isDark
		// 				? themeStyle.COLOR_BORDER_LIGHT
		// 				: themeStyle.COLOR_TEXT_DARK,
		// 		},
		// 	},
		// },
		// MuiOutlinedInput: {
		// 	root: {
		// 		backgroundColor: isDark
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
