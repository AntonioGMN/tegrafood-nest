/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-poppins)"],
			},
			colors: {
				boderColor: "#EBF0FF",
				customGray: "#9098B1",
				customBlue: "#223263",
				skyBlue: "#40BFFF",
				customOrage: "#DC9000",
			},
			width: {
				form: "343px",
			},
		},
	},
	plugins: [],
};
