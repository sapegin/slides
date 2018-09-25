import React from 'react';
import { CodeSurfer } from 'mdx-deck-code-surfer';
import codeTheme from '../codeTheme';

const Code = props => <CodeSurfer theme={codeTheme} {...props} />;

export default Code;
