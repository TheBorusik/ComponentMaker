import * as React from 'react';
import { render } from 'react-dom';
import Form from './Form.tsx';
import GridSizer from './GridSizer.tsx';
import GridLayout from './GridLayout.tsx';
import $ from 'jquery';
import { ThemeProvider } from 'styled-components';
import theme from './Theme.tsx';

import './reset.scss';
import './form.scss';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="app">
				<GridLayout />
			</div>
		</ThemeProvider>
	);
}

$(document).ready(function() {
	let showLines = true;
	$('.line').on('click', function() {
		$(this).toggleClass('active');
		$(this)
			.next()
			.toggleClass('active');
	});
	$('.gap').on('click', function() {
		$(this).toggleClass('active');
		$(this)
			.prev()
			.toggleClass('active');
	});
	$('.switch').on('click', function() {
		let toValue = $(this).data('to');
		let classValue = $(this).data('value');
		$(`.${toValue}`).toggleClass(classValue);
		$(this).toggleClass(classValue);
	});
});

const rootElement = document.getElementById('root');
render(<App />, rootElement);
