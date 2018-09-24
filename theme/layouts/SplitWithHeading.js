import React from 'react';
import styled from 'styled-components';
import Flex from 'mdx-deck/dist/Flex';
import Box from 'mdx-deck/dist/Box';

const Root = styled.div`
	display: flex;
	flex-direction: column;
	width: 95vw;
	height: 92vh;
`;

const Container = styled(Flex)`
	flex: 1;
`;

const SplitWithHeading = ({ children }) => {
	const [heading, ...rest] = React.Children.toArray(children.props.children);
	const half = rest.length / 2;
	const left = rest.slice(0, half);
	const right = rest.slice(half);

	return (
		<Root>
			{heading}
			<div>
				<Container>
					<Box width={1 / 2} pr={3}>
						{left}
					</Box>
					<Box width={1 / 2} pl={3}>
						{right}
					</Box>
				</Container>
			</div>
		</Root>
	);
};

export default SplitWithHeading;
