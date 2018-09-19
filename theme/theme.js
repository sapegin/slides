import theme from 'mdx-deck/themes';
import { modularScale } from 'polished';
import {
	uiColor,
	uiHoverColor,
	bgColor,
	lightBgColor,
	baseColor,
	darkColor,
	lightColor,
	primaryColor,
	secondaryColor,
	addColor,
	removeColor,
	font,
	monospace
} from './tokens';
import codeTheme from './codeTheme';

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
