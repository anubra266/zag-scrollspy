import { useEffect, useState } from "react";

export const useTheme = () => {
	const [darkMode, setDarkMode] = useState(() => {
		if (typeof window !== "undefined") {
			return (
				localStorage.getItem("darkMode") === "true" ||
				window.matchMedia("(prefers-color-scheme: dark)").matches
			);
		}
		return false;
	});

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("darkMode", darkMode.toString());
	}, [darkMode]);

	const toggleDarkMode = () => setDarkMode(!darkMode);

	return { darkMode, toggleDarkMode };
};
