import React from 'react';
import Code from '../../../theme/components/Code';

export default function() {
	return (
		<Code
			language="javascript"
			code={`import styled from 'styled-components';
import theme from './theme';

const Box = styled.div\`
	min-width: 0;
	margin: $\{props => theme.space[props.m]};
	margin-left: $\{props => theme.space[props.ml]};
	margin-top: $\{props => theme.space[props.mt]};
	margin-right: $\{props => theme.space[props.mr]};
	margin-bottom: $\{props => theme.space[props.mb]};
	padding: $\{props => theme.space[props.p]};
	padding-left: $\{props => theme.space[props.pl]};
	padding-top: $\{props => theme.space[props.pt]};
	padding-right: $\{props => theme.space[props.pr]};
	padding-bottom: $\{props => theme.space[props.pb]};
\`;

export default Box;`}
		/>
	);
}
