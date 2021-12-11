import baseStyled, { ThemedStyledInterface } from 'styled-components';

const colors = {
	black: '#010101',
	blue: '#0000FF',
	green: '#00FF00',
	grey: '#424242',
	red: '#FF0000',
	transparent: 'transparent',
	white: '#FFFFFF'
};

const factor = (factor: number): string => `${0.5 * factor}rem`

export const theme = {
	colors,
	factor,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
