import { css, InterpolationValue } from 'styled-components';

const boxShadow = css`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export interface MyTheme {
	boxShadow: InterpolationValue[];
	primary: string;
	secondary: string;
	success: string;
	danger: string;
	dark: string;
	lightdark: string;
	light: string;
	clear: string;
}

const theme: MyTheme = {
	boxShadow,
	primary: '#00539b',
	secondary: '#f39a00',
	success: '#00abab',
	danger: '#f53d3d',
	dark: '#39444e',
	lightdark: '#808080',
	light: '#f6f6f6',
	clear: '#ffffff00'
};

export default theme;
