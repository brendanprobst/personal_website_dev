import React, { useState } from "react";

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState(true);

	function toggleDarkMode() {
		setIsDark(!isDark);
	}
	function getDarkMode() {
		return isDark;
	}

	return {
		getDarkMode,
		toggleDarkMode,
	};
}
