import styled from 'styled-components';
import theme from './theme';

const Text = styled.p`
	margin: 0;
	font-family: ${theme.fonts.base};
	line-height: ${theme.lineHeights.base};
	font-size: ${props =>
		theme.fontSizes[
			{
				primary: 'base',
				secondary: 's'
			}[props.variant]
		]};
	color: ${props =>
		theme.colors[
			{
				primary: 'base',
				secondary: 'light'
			}[props.variant]
		]};
`;

Text.defaultProps = {
	variant: 'primary'
};

export default Text;
