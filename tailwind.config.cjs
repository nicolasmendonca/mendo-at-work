/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts,svx}'],
	darkMode: 'class',

	theme: {
		extend: {}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
