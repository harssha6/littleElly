/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			
			screens: {
				'md': '1000px',
				's': '500px',
			},
			colors: {
				accent:'#C07C47',
				'accent-bold':'#FF9D51',
				accent2:'#4A7C60', 
				accent3:'#6F322E',
				purple: "#B892F9",
				yellow: {
					DEFAULT: '#F5CC4F',
					100: "#FCF8EB",
				},
				blue: {
					DEFAULT: '#78ADF9',
					100: "#78ADF9",
				},
				'shades-blue-dark': "#052B4C",
				'neutral-dark-grey': "#1B2226",
				"dark-gray": "#1B2226",
				primary: {
					DEFAULT: '#EE7F82'
				},
				secondary: {
					DEFAULT: '#FFC784'
				},
				green: {
					200: "#A5D27C",
					300: '#F5CC4F',
					400: '#4A7C60',
					500: '#3C674F',
					600: '#0A5E2F'
				},
				orange: {
					200: "#F6BD60"
				},
				gray: {
					100: "#CFD7DD",
					200: '#FAFAFA',
					300: '#E2E2E2',
					500: '#D9DBE9',
					600: '#A4A4A4',
					700: '#BCBCBC',
					800: '#ADADAD',
					900: '#D3D3D3'
				},
				black: {
					DEFAULT: "#000",
					100: "#564101"
				},
				red: {
					200: "#EE7F82",
					500: '#A9342D',
					600: "#FF7162",
					800: '#904D4F'
				},
			},
			gap: {
				'xl': "60px",
				'l': '32px',
				'r': '16px',
				"m": "24px",
				's': '8px',
			},
			padding: {
				'xl': "60px",
				'l': '32px',
				"m": "24px",
				'r': '16px',
				's': '8px',

			},
			margin: {
				'xl': "60px",
				'l': '32px',
				"m": "24px",
				'r': '16px',
				's': '8px',

			},
			
		
			fontSize: {
				'clamp-1': 'clamp(3rem, 1.5vw, 1rem)',
			},

		},
		fontFamily: {
			'display': ['"Grandstander"', 'sans-serif'],
			'sans': ['"Nunito Sans"', 'sans-serif'],
			'grandstander': ['"Grandstander"', 'sans-serif'],
		}
	},
	// safelist: [
	// 	"[&>span]:text-primary"
	// ],
	plugins: [],
}
