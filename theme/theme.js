import { pre, createCode } from '@mdx-deck/themes/syntax-highlighter-prism';

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
	monospace,
	fontSizes
} from './tokens';
import codeTheme from './codeTheme';

export default {
	// aspectRatio: 9 / 16,
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
		img: {
			maxWidth: '95vw',
			maxHeight: '92vh'
		},
		li: {
			fontSize: fontSizes[1],
			marginBottom: '0.75vmax'
		},
		'p pre, li pre': {
			display: 'inline-block'
		}
	},
	heading: {
		margin: 0,
		lineHeight: 1.1,
		textAlign: 'center',
		'& + *': {
			marginTop: '2vmax !important'
		},
		'& + img': {
			maxHeight: 'calc(100vh - 10rem)' // Heading + dots below
		}
	},
	h1: {
		fontWeight: 'normal'
	},
	pre: {
		textAlign: 'left'
	},
	ol: {
		textAlign: 'left'
	},
	ul: {
		textAlign: 'left'
	},
	components: {
		pre,
		code: createCode(codeTheme)
	}
};
