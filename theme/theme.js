import theme from 'mdx-deck/themes';
import { modularScale } from 'polished';

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
	prism: {
		// Styles based on https://github.com/conorhastings/react-syntax-highlighter/
		// Colors are custom
		style: {
			'code[class*="language-"]': {
				color: darkColor,
				fontFamily: monospace,
				textAlign: 'left',
				whiteSpace: 'pre',
				wordSpacing: 'normal',
				wordBreak: 'normal',
				wordWrap: 'normal',
				lineHeight: '1.5',
				MozTabSize: '4',
				OTabSize: '4',
				tabSize: '4',
				WebkitHyphens: 'none',
				MozHyphens: 'none',
				msHyphens: 'none',
				hyphens: 'none'
			},
			'pre[class*="language-"]': {
				padding: 0,
				color: darkColor,
				fontFamily: monospace,
				textAlign: 'left',
				whiteSpace: 'pre',
				wordSpacing: 'normal',
				wordBreak: 'normal',
				wordWrap: 'normal',
				lineHeight: '1.5',
				MozTabSize: '4',
				OTabSize: '4',
				tabSize: '4',
				WebkitHyphens: 'none',
				MozHyphens: 'none',
				msHyphens: 'none',
				hyphens: 'none',
				padding: '1em',
				margin: '.5em 0',
				overflow: 'auto'
			},
			':not(pre) > code[class*="language-"]': {
				whiteSpace: 'normal'
			},
			comment: {
				color: lightColor
			},
			'block-comment': {
				color: lightColor
			},
			prolog: {
				color: lightColor
			},
			doctype: {
				color: lightColor
			},
			cdata: {
				color: lightColor
			},
			punctuation: {
				color: lightColor
			},
			tag: {
				color: secondaryColor
			},
			'attr-name': {
				color: baseColor
			},
			namespace: {
				color: secondaryColor
			},
			'function-name': {
				color: darkColor
			},
			boolean: {
				color: primaryColor
			},
			number: {
				color: lightColor
			},
			function: {
				color: baseColor
			},
			property: {
				color: secondaryColor
			},
			'class-name': {
				color: primaryColor
			},
			constant: {
				color: primaryColor
			},
			symbol: {
				color: baseColor
			},
			selector: {
				color: primaryColor
			},
			important: {
				color: darkColor,
				fontWeight: 'bold'
			},
			atrule: {
				color: darkColor
			},
			keyword: {
				color: darkColor
			},
			builtin: {
				color: baseColor,
				textDecoration: 'underline'
			},
			string: {
				color: primaryColor
			},
			char: {
				color: primaryColor
			},
			'attr-value': {
				color: primaryColor
			},
			regex: {
				color: primaryColor
			},
			variable: {
				color: primaryColor
			},
			operator: {
				color: lightColor
			},
			entity: {
				color: baseColor
			},
			url: {
				color: lightColor,
				textDecoration: 'underline'
			},
			bold: {
				fontWeight: 'bold'
			},
			italic: {
				fontStyle: 'italic'
			},
			inserted: {
				color: addColor
			},
			deleted: {
				color: removeColor
			}
		}
	}
};
