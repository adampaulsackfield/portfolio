module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			tranparent: 'transparent',
			background: '#E4E7D4',
			pink: '#FF5678',
			blue: '#50DDFC',
			orange: '#FC8E50',
			purple: '#FC50B7',
			green: '#53FC50',
			yellow: '#FCEB50',
			white: '#FFF',
			black: '#000',
		},
		fontFamily: {
			primary: ['Inria Sans', 'sans-serif'],
			secondary: ['Bebas Neue', 'cursive'],
		},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
		},
		extend: {
			dropShadow: {
				btn: '4px 4px 0px rgba(0, 0, 0, 1)',
				btnHover: '0 0 0 rgba(0,0,0,1)',
			},
		},
	},
	plugins: [],
};
