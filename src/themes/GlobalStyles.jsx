import { css, Global } from "@emotion/react";

const GlobalStyles = ({ theme }) => {

	const base = css`
		/* CSS RESET STYLES */
		html,
		body,
		div,
		span,
		applet,
		object,
		iframe,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p,
		blockquote,
		pre,
		a,
		abbr,
		acronym,
		address,
		big,
		cite,
		code,
		del,
		dfn,
		em,
		img,
		ins,
		kbd,
		q,
		s,
		samp,
		small,
		strike,
		strong,
		sub,
		sup,
		tt,
		var,
		b,
		u,
		i,
		center,
		dl,
		dt,
		dd,
		ol,
		ul,
		li,
		fieldset,
		form,
		label,
		legend,
		table,
		caption,
		tbody,
		tfoot,
		thead,
		tr,
		th,
		td,
		article,
		aside,
		canvas,
		details,
		embed,
		figure,
		figcaption,
		footer,
		header,
		hgroup,
		menu,
		nav,
		output,
		ruby,
		section,
		summary,
		time,
		mark,
		audio,
		video {
			margin: 0;
			padding: 0;
			border: 0;
			/* font-size: 100%; */
			font: inherit;
			vertical-align: baseline;
		}
		* {
			box-shadow: none;
		}

		:root {
			font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
			font-synthesis: none;
			text-rendering: optimizeLegibility;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			-webkit-text-size-adjust: 100%;
			padding: 0;
			margin: 0;
		}

		*,
		*::before,
		*::after {
			box-sizing: border-box;
		}

		body {
			background-color: blue
		}
	`;
	// const themeGlobals = Object.keys(theme.globals).map
	// console.log(themeGlobals)

	return <Global styles={[base, theme.globals] } />

	// need to find a way to programatically inject global styles from theme
	// return (
	// 	<Global
	// 		styles={css`
	// 			/* CSS RESET STYLES */
	// 			html,
	// 			body,
	// 			div,
	// 			span,
	// 			applet,
	// 			object,
	// 			iframe,
	// 			h1,
	// 			h2,
	// 			h3,
	// 			h4,
	// 			h5,
	// 			h6,
	// 			p,
	// 			blockquote,
	// 			pre,
	// 			a,
	// 			abbr,
	// 			acronym,
	// 			address,
	// 			big,
	// 			cite,
	// 			code,
	// 			del,
	// 			dfn,
	// 			em,
	// 			img,
	// 			ins,
	// 			kbd,
	// 			q,
	// 			s,
	// 			samp,
	// 			small,
	// 			strike,
	// 			strong,
	// 			sub,
	// 			sup,
	// 			tt,
	// 			var,
	// 			b,
	// 			u,
	// 			i,
	// 			center,
	// 			dl,
	// 			dt,
	// 			dd,
	// 			ol,
	// 			ul,
	// 			li,
	// 			fieldset,
	// 			form,
	// 			label,
	// 			legend,
	// 			table,
	// 			caption,
	// 			tbody,
	// 			tfoot,
	// 			thead,
	// 			tr,
	// 			th,
	// 			td,
	// 			article,
	// 			aside,
	// 			canvas,
	// 			details,
	// 			embed,
	// 			figure,
	// 			figcaption,
	// 			footer,
	// 			header,
	// 			hgroup,
	// 			menu,
	// 			nav,
	// 			output,
	// 			ruby,
	// 			section,
	// 			summary,
	// 			time,
	// 			mark,
	// 			audio,
	// 			video {
	// 				margin: 0;
	// 				padding: 0;
	// 				border: 0;
	// 				/* font-size: 100%; */
	// 				font: inherit;
	// 				vertical-align: baseline;
	// 			}
	// 			* {
	// 				box-shadow: none;
	// 			}

	// 			:root {
	// 				font-family: Inter, system-ui, Avenir, Helvetica, Arial,
	// 					sans-serif;
	// 				font-synthesis: none;
	// 				text-rendering: optimizeLegibility;
	// 				-webkit-font-smoothing: antialiased;
	// 				-moz-osx-font-smoothing: grayscale;
	// 				-webkit-text-size-adjust: 100%;
	// 				padding: 0;
	// 				margin: 0;
	// 			}
	// 			html {
	// 				font-size: 14px;
	// 			}

	// 			*,
	// 			*::before,
	// 			*::after {
	// 				box-sizing: border-box;
	// 				margin: 0;
	// 				padding: 0;
	// 			}
	// 			body {
	// 				background-color: ${theme.backgroundColor};
	// 				transition: background-color 0.5s;
	// 				margin: 0;
	// 				display: flex;
	// 				place-items: center;
	// 				width: 100vw;
	// 				min-height: 100vh;
	// 				color: ${theme.textColor}; // this should mostly be overriden
	// 			}
	// 			#root {
	// 				width: 100vw;
	// 				min-height: 100vh;
	// 				/* margin: 0 auto; */
	// 				/* padding: 2rem; */
	// 				text-align: center;
	// 			}

	// 			nav {
	// 				background-color: ${theme.backgroundColor};
	// 			}

	// 			a {
	// 				font-weight: 500;
	// 				color: #646cff;
	// 				text-decoration: inherit;
	// 			}

	// 			a:hover {
	// 				color: #535bf2;
	// 			}

    //             h1 {
    //                 color: ${theme.typography.h1};
    //             }
    //             h2 {
    //                 color: ${theme.typography.h2};
    //             }
    //             h3 {
    //                 color: ${theme.typography.h3};
    //             }
	// 		`}
	// 	/>
	// );
};

export default GlobalStyles;
