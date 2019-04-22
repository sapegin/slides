import styled from '@emotion/styled';
import theme from './theme';

const Input = styled.input`
	display: block;
	width: 100%;
	height: 4rem;
	padding: ${theme.space.s};
	font-family: ${theme.fonts.base};
	font-size: ${theme.fontSizes.base};
	color: ${theme.colors.base};
	background-color: ${theme.colors.bg};
	border: ${theme.borders.base} solid ${theme.colors.primary};
	border-radius: ${theme.radii.base};
	box-sizing: border-box;

	/* Remove red outline on required input in Firefox */
	box-shadow: none;

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${theme.colors.focus};
	}

	&:disabled {
		opacity: 0.6;
		filter: saturate(60%);
	}
`;

export default Input;
