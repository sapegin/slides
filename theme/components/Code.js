import React from 'react';
import { Prism } from 'react-syntax-highlighter';
import codeTheme from '../codeTheme';

export default function({ code, ...props }) {
	if (typeof code !== 'string') {
		return (
			<pre style={{ color: 'firebrick' }}>
				Code: `code` prop must be a string
			</pre>
		);
	}
	return (
		<Prism {...codeTheme} {...props}>
			{code.replace(/\t/, '  ')}
		</Prism>
	);
}
