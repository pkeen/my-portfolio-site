import { css, Global } from "@emotion/react";

const GlobalStyles2 = ({theme}) => {

    const reset = css`
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

        html {
            font-size: 16px;
        }

        a {
            text-decoration: inherit;
        }
	`;


    return (
        <Global styles={[reset, theme.globals]}>
            
        </Global>
    );
}

export default GlobalStyles2;
