/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'main': {
					'50': '#f0fbfb',
					'100': '#d9f3f4',
					'200': '#b8e7e9',
					'300': '#88d4d8',
					'400': '#4bb7bf', 
					'500': '#349ca6',
					'600': '#2e808c',
					'700': '#2b6973',
					'800': '#2a5660',
					'900': '#274952',
					'950': '#152f37',
				},
    	}	
		},
	},
	plugins: [],
}
