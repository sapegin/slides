import React from 'react';
import styled from 'styled-components';
import Flex from 'mdx-deck/dist/Flex';
import Box from 'mdx-deck/dist/Box';

const Root = styled.div([], {
	width: '100vw',
	height: '100vh'
});

const SplitWithHeading = ({ children }) => {
	const [heading, left, ...rest] = React.Children.toArray(
		children.props.children
	);

	return (
		<Root>
			{heading}
			<Flex
				css={{
					alignItems: 'center',
					height: '100%'
				}}
			>
				<Box width={1 / 2}>{left}</Box>
				<Box width={1 / 2}>{rest}</Box>
			</Flex>
		</Root>
	);
};

export default SplitWithHeading;
