import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.section<StyleSheet>`
	position: relative;
	height: 100vh;
	background: $root-color;
	display: grid;

	${props => {
		// const $scale = 1;
		// const $col = 32 * $scale;
		// const $row = 32 * $scale;
		// const $font_size = 1;
		// const $line_height = 1.5 * $font_size;
		// const $line_font_size = $font_size / 2;
		// const $line = 1;
		// const $col_count = 24 / $scale;
		// const $row_count = 24 / $scale;
		const $root_color = '#1d1e22';
		const $back_color = '#36383f';
		const $text_color = '#c5c8d4';
		const $line_color = '#d44545';
		const $gap_color = '#ffdd40';
		const $transition_ms = 0.1;
		const $transition_func = 'cubic-bezier(calc(0 + $transition - ms), 1, 0, 1)';

		const $pt = 1;
		const $unit = 2 * $pt;
		const $top = 2 * $unit;
		const $left = 8 * $unit;
		const $center = '1fr';
		const $right = 2 * $unit;
		const $bottom = 2 * $unit;

		return css`
			grid-template:
				'top-left top-center top-right' ${$top}
				'center-left center-center center-right' ${$center}
				'bottom-left bottom-center bottom-right' ${$bottom}
				/ ${$left} ${$center} ${$right};
		`;
	}};
`;
const MenuLeft = styled.div`
	${props => {
		return css`
			.layout__container {
				position: relative;
				height: 100vh;
				background: $root-color;
				display: grid;

				grid-template:
					'top-left top-center top-right' #{$top}
					'center-left center-center center-right' #{$center}
					'bottom-left bottom-center bottom-right' #{$bottom}
					/ #{$left} #{$center} #{$right};
			}
		`;
	}}
`;
const MenuRight = styled.div`
	${props => {
		return css`
			.layout__container {
				position: relative;
				height: 100vh;
				background: $root-color;
				display: grid;

				grid-template:
					'top-left top-center top-right' #{$top}
					'center-left center-center center-right' #{$center}
					'bottom-left bottom-center bottom-right' #{$bottom}
					/ #{$left} #{$center} #{$right};
			}
		`;
	}}
`;

const GridLines = styled.section`
	${props => {
		return css`
			.layout__container {
				position: relative;
				height: 100vh;
				background: $root-color;
				display: grid;

				grid-template:
					'top-left top-center top-right' #{$top}
					'center-left center-center center-right' #{$center}
					'bottom-left bottom-center bottom-right' #{$bottom}
					/ #{$left} #{$center} #{$right};
			}
		`;
	}}
`;
const Content = styled.section`
	${props => {
		return css`
			display: grid;
			grid-area: center-center;
			background: green;
		`;
	}}
`;

const Columns = styled.section`
	${props => {
		return css`
			.layout__container {
				position: relative;
				height: 100vh;
				background: $root-color;
				display: grid;

				grid-template:
					'top-left top-center top-right' #{$top}
					'center-left center-center center-right' #{$center}
					'bottom-left bottom-center bottom-right' #{$bottom}
					/ #{$left} #{$center} #{$right};
			}
		`;
	}}
`;
const Rows = styled.section`
	${props => {
		return css`
			.layout__container {
				position: relative;
				height: 100vh;
				background: $root-color;
				display: grid;

				grid-template:
					'top-left top-center top-right' #{$top}
					'center-left center-center center-right' #{$center}
					'bottom-left bottom-center bottom-right' #{$bottom}
					/ #{$left} #{$center} #{$right};
			}
		`;
	}}
`;
const Row = styled.div`
	${props => {
		return css`
			.layout__container {
				position: relative;
				height: 100vh;
				background: $root-color;
				display: grid;

				grid-template:
					'top-left top-center top-right' #{$top}
					'center-left center-center center-right' #{$center}
					'bottom-left bottom-center bottom-right' #{$bottom}
					/ #{$left} #{$center} #{$right};
			}
		`;
	}}
`;
const Col = styled.div`
	${props => {
		return css`
			.layout__container {
				position: relative;
				height: 100vh;
				background: $root-color;
				display: grid;

				grid-template:
					'top-left top-center top-right' #{$top}
					'center-left center-center center-right' #{$center}
					'bottom-left bottom-center bottom-right' #{$bottom}
					/ #{$left} #{$center} #{$right};
			}
		`;
	}}
`;
const Line = styled.span`
	${props => {
		return css`
			.layout__container {
				position: relative;
				height: 100vh;
				background: $root-color;
				display: grid;

				grid-template:
					'top-left top-center top-right' #{$top}
					'center-left center-center center-right' #{$center}
					'bottom-left bottom-center bottom-right' #{$bottom}
					/ #{$left} #{$center} #{$right};
			}
		`;
	}}
`;
const Gap = styled.span`
	${props => {
		return css`
			.layout__container {
				position: relative;
				height: 100vh;
				background: $root-color;
				display: grid;

				grid-template:
					'top-left top-center top-right' #{$top}
					'center-left center-center center-right' #{$center}
					'bottom-left bottom-center bottom-right' #{$bottom}
					/ #{$left} #{$center} #{$right};
			}
		`;
	}}
`;

type GridLayoutProps = {
	cols: Array<any>;
	rows: Array<any>;
	children?: any;
};
const GridLayout = ({ cols, rows, children }: GridLayoutProps) => {
	console.log(rows, cols);
	return (
		<Container>
			<MenuLeft className="layout__menu--left">
				<span className="switch__display-layout" data-to="layout__gridlines" data-value="hide" />
			</MenuLeft>
			<MenuRight className="layout__menu--right" />
			<Columns className="layout__columns">
				{cols.map(() => {
					<Col className="layout__columns--col">
						<Line className="layout__columns--col--line" />
						<Gap className="layout__columns--col--gap" />
					</Col>;
				})}
			</Columns>
			<Rows className="layout__rows">
				{rows.map(() => {
					<Row className="layout__rows--row">
						<Line className="layout__rows--row--line" />
						<Gap className="layout__rows--row--gap" />
					</Row>;
				})}
			</Rows>
			<GridLines className="layout__gridlines" />
			<Content className="layout__content">{children}</Content>
		</Container>
	);
};

class GridLayoutComponent extends React.Component {
	state = {
		rows: new Array<any>(12),
		cols: new Array<any>(12)
	};

	com;

	render() {
		const { rows, cols } = this.state;
		return <GridLayout cols={cols} rows={rows} />;
	}
}

export default GridLayoutComponent;
