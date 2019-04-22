import React from 'react';
import styled from '@emotion/styled';
import { Invert } from 'mdx-deck/layouts';
import Flex from '../components/Flex';
import Box from '../components/Box';
import Wayfair from './Wayfair';

const CoverWayfair = props => (
	<Flex
		width="100vw"
		height="100vh"
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
			<Box mr="auto" fontSize="2.5vw">
				Artem Sapegin
			</Box>
			<Wayfair variation="white" width="15vw" />
		</Flex>
	</Flex>
);

export default CoverWayfair;
