import {
	baseColor,
	bgColor,
	darkColor,
	lightColor,
	primaryColor,
	secondaryColor,
	addColor,
	removeColor,
	monospace,
	fontSizes
} from './tokens';

export default {
	// Styles based on https://github.com/conorhastings/react-syntax-highlighter/
	// Colors are custom
	plain: {
		color: baseColor,
		backgroundColor: bgColor
	},
	styles: [
		{
			types: ['attr-name', 'symbol', 'function', 'entity'],
			style: {
				color: baseColor
			}
		},
		{
			types: [
				'attr-value',
				'constant',
				'boolean',
				'string',
				'selector',
				'char',
				'variable',
				'class-name'
			],
			style: {
				color: primaryColor
			}
		},
		{
			types: ['property', 'tag'],
			style: {
				color: secondaryColor
			}
		},
		{
			types: [
				'comment',
				'block-comment',
				'prolog',
				'doctype',
				'cdata',
				'number',
				'punctuation',
				'operator'
			],
			style: {
				color: lightColor
			}
		},
		{
			types: ['function-name', 'keyword', 'at-rule'],
			style: {
				color: darkColor
			}
		},
		{
			types: ['inserted'],
			style: {
				color: addColor
			}
		},
		{
			types: ['deleted'],
			style: {
				color: removeColor
			}
		},
		{
			types: ['builtin'],
			style: {
				color: baseColor,
				textDecoration: 'underline'
			}
		},
		{
			types: ['url'],
			style: {
				color: lightColor,
				textDecoration: 'underline'
			}
		},
		{
			types: ['important'],
			style: {
				fontWeight: '400'
			}
		},
		{
			types: ['bold'],
			style: {
				fontWeight: 'bold'
			}
		},
		{
			types: ['italic'],
			style: {
				fontStyle: 'italic'
			}
		},
		{
			types: ['namespace'],
			style: {
				opacity: 0.7
			}
		}
	],
	style: {
		'code[class*="language-"]': {
			color: darkColor,
			fontFamily: monospace,
			fontSize: fontSizes[0],
			textAlign: 'left',
			whiteSpace: 'pre',
			wordSpacing: 'normal',
			wordBreak: 'normal',
			wordWrap: 'normal',
			lineHeight: '1.5',
			MozTabSize: '2',
			OTabSize: '2',
			tabSize: '2',
			WebkitHyphens: 'none',
			MozHyphens: 'none',
			msHyphens: 'none',
			hyphens: 'none'
		},
		'pre[class*="language-"]': {
			margin: 0,
			padding: 0,
			color: darkColor,
			fontFamily: monospace,
			textAlign: 'left',
			whiteSpace: 'pre',
			wordSpacing: 'normal',
			wordBreak: 'normal',
			wordWrap: 'normal',
			lineHeight: '1.5',
			MozTabSize: '2',
			OTabSize: '2',
			tabSize: '2',
			WebkitHyphens: 'none',
			MozHyphens: 'none',
			msHyphens: 'none',
			hyphens: 'none',
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
};
