/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#2F8559",
					light: "#3a9f6c",
					dark: "#246c47",
					bg: "#f0f9f4",
				},
			},
		},
	},
	plugins: [],
};
