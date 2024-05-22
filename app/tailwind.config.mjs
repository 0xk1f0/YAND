/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	mode: 'jit',
	theme: {
		extend: {
			fontFamily: {
				"system-ui": "system-ui"
			},
			flex: {
				"25": "1 1 25%",
				"100": "1 1 100%"
			}
		},
	},
	plugins: [],
}
