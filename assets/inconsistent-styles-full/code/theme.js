import { transparentize } from 'polished';

export default {
	fonts: {
		base: 'Georgia, "Times New Roman", Times, serif'
	},
	fontSizes: {
		base: '1.7vmax',
		s: '1.4vmax',
		m: '1.7vmax',
		l: '2.0vmax',
		xl: '3.0vmax',
		xxl: '4.5vmax'
	},
	lineHeights: {
		base: 1.5,
		heading: 1.1
	},
	colors: {
		bg: '#fff',
		base: '#333',
		primary: '#8667a8',
		secondary: '#767676',
		light: '#ccc',
		lighter: '#efefef',
		hover: '#ed9dc5',
		focus: transparentize(0.4, '#ed9dc5'),
		error: '#d0453e'
	},
	radii: {
		base: '0.15em'
	},
	borders: {
		base: '0.15em'
	},
	space: {
		xxs: '0.125rem',
		xs: '0.25rem',
		s: '0.5rem',
		m: '1rem',
		l: '2rem',
		xl: '3rem',
		xxl: '4rem'
	}
};
