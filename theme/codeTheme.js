export default {
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
};
