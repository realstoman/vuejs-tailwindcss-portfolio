module.exports = {
	purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
	},
	variants: {
		extend: {
			colors: {
				background: {
					primary: 'var(--bg-background-primary)',
					secondary: 'var(--bg-background-secondary)',
					tertiary: 'var(--bg-background-tertiary)',

					form: 'var(--bg-background-form)',
				},

				copy: {
					primary: 'var(--text-copy-primary)',
					secondary: 'var(--text-copy-hover)',
				},

				'border-color': {
					primary: 'var(--border-border-color-primary)',
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class',
		}),
	],
};
