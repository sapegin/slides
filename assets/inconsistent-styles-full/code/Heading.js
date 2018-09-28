import styled from 'styled-components';
import theme from './theme';

const Heading = styled.h1`
	margin: 0;
	font-family: ${theme.fonts.base};
	line-height: ${theme.lineHeights.heading};
	font-size: ${props => theme.fontSizes[['', 'xxl', 'xl', 'l'][props.level]]};
	color: ${theme.colors.base};
`;

export default Heading;
