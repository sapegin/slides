import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Invert } from 'mdx-deck/layouts';
import Heading from '../components/Heading';

const animation = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const Root = styled(Invert)`
	background: linear-gradient(270deg, #f90, #00d7ff);
	background-size: 400% 400%;
	animation: ${animation} 20s ease infinite;
`;

const Boom = props => (
	<Root>
		<Heading boom {...props} />
	</Root>
);

export default Boom;
