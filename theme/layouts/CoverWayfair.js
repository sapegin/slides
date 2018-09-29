import React from 'react';
import styled from 'styled-components';
import { Invert } from 'mdx-deck/layouts';
import { Flex, Box } from '@rebass/grid';
import Wayfair from './Wayfair';

const Container = styled(Flex)`
	width: 100vw;
	height: 100vh;
`;

const Author = styled(Box)`
	font-size: 2.5vw;
`;

const Logo = styled(Wayfair)`
	width: 15vw;
`;

const CoverWayfair = props => (
	<Container
		flexDirection="column"
		alignItems="center"
		justifyContent="center"
		bg="primary"
		color="background"
	>
		<Flex alignItems="center" flex="1">
			{props.children}
		</Flex>
		<Flex width={1} p={4} alignItems="center">
			<Author mr="auto">Artem Sapegin</Author>
			<Logo variation="white" />
		</Flex>
	</Container>
);

export default CoverWayfair;
