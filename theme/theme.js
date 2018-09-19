import theme from 'mdx-deck/themes';
import { modularScale } from 'polished';
import codeTheme from './codeTheme';

const uiColor = 'rgba(0, 0, 0, 0.3)';
const uiHoverColor = 'rgba(0, 0, 0, 0.8)';
const bgColor = '#fff';
const lightBgColor = '#fafafa';
const baseColor = '#222';
const darkColor = '#666';
const lightColor = '#999';
const primaryColor = '#dc8b0c';
const secondaryColor = '#38bfd8';
const addColor = '#2d7b43';
const removeColor = '#bb2c2c';

const font = 'Roboto, sans-serif';
const monospace = 'Roboto Mono, monospace';
const fontSizes = [1, 2, 3, 4, 5].map(x => modularScale(x));

export default {
	...theme,
	// mdx-deck will load fronts from Google Fonts
	font,
	monospace,
	fontSizes,
	colors: {
		text: baseColor,
		background: bgColor,
		link: baseColor,
		heading: 'inherit',
		primary: primaryColor,
		secondary: secondaryColor
	},
	css: {
		fontFeatureSettings: `'kern', 'pnum', common-ligatures contextual historical-ligatures`,
		WebkitFontKerning: 'normal',
		fontKerning: 'normal',
		fontVariantNumeric: 'proportional-nums',
		fontVariantLigatures: 'common-ligatures contextual historical-ligatures',
		'& .Slide': {
			color: 'red'
		}
	},
	heading: {
		margin: 0,
		lineHeight: 1.15,
		'& + *': {
			marginTop: '16px'
		},
		'& + img': {
			maxHeight: 'calc(100vh - 10rem)' // Heading + dots below
		},
		'&:first-child:last-child': {
			textAlign: 'center'
		}
	},
	h1: {
		fontWeight: 'normal'
	},
	prism: codeTheme
};
