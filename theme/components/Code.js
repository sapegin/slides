import React from 'react';
import { Prism } from 'react-syntax-highlighter';
import codeTheme from '../codeTheme';

export default function({ code, ...props }) {
	return (
		<Prism {...codeTheme} {...props}>
			{code}
		</Prism>
	);
}
