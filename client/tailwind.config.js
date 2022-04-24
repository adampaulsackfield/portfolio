module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			transparent: 'transparent',
			background: '#0a192f',
			accent: '#f57dff',
			primary: '#8892b0',
			primaryLight: '#a8b2d1',
			primaryDark: '#495670',
			white: '#fff',
		},
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
		},
		extend: {},
	},
	plugins: [],
};
