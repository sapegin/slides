import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import theme from './theme';

const Button = styled.button`
	display: block;
	width: 100%;
	height: 4rem;
	padding: ${theme.space.s} ${theme.space.m};
	font-family: ${theme.fonts.base};
	font-size: ${theme.fontSizes.base};
	color: ${theme.colors.bg};
	background-color: ${theme.colors.primary};
	border: ${theme.borders.base} solid ${theme.colors.primary};
	border-radius: ${theme.radii.base};
	user-select: none;

	&:hover:enabled,
	&:active {
		border-color: ${theme.colors.hover};
		background-color: ${theme.colors.hover};
		cursor: pointer;
	}

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${theme.colors.focus};
	}

	&:disabled {
		opacity: 0.6;
		filter: saturate(60%);
	}

	&::-moz-focus-inner {
		border: 0;
	}
`;

export default Button;
