import defaultTheme from "./default-theme";
import { merge } from "lodash";

let darkTheme = merge({}, defaultTheme, {
	// requires a deep merge
	typography: {
		h1: {
			color: defaultTheme.colors.grey[50],
		},
		h2: {
			color: defaultTheme.colors.grey[600],
		},
		h3: {
			color: defaultTheme.colors.grey[300],
		},
		h4: {
			color: defaultTheme.colors.grey[300],
		},
		h5: {
			color: defaultTheme.colors.grey[400],
		},
		p: {
			color: defaultTheme.colors.grey[500],
		},
		a: {
			color: defaultTheme.colors.grey[400],
			"&: hover": {
				color: defaultTheme.colors.grey[600],
			},
		},
		blockquote: {
			color: defaultTheme.colors.grey[400],
		},
		input: {
			// backgroundColor: defaultTheme.colors.grey[900],
			color: defaultTheme.colors.grey[400],
		},
		label: {
			color: defaultTheme.colors.grey[400],
		},
		textArea: {
			color: defaultTheme.colors.grey[400],
		},
	},
	components: {
		button: {
			color: defaultTheme.colors.grey[50],
			variants: {
				rhomboid: {
					color: defaultTheme.colors.grey[400],
					borderColor: defaultTheme.colors.grey[400],
					hover: {
						backgroundColor: defaultTheme.colors.grey[800],
					},
				},
			},
		},
	},
	gradients: {
		h1: [defaultTheme.colors.grey[50], defaultTheme.colors.pink[200]],
		h2: [
			defaultTheme.colors.appleBlossom[500],
			defaultTheme.colors.orientalPink[300],
		],
		h3: [
			defaultTheme.colors.orientalPink[600],
			defaultTheme.colors.appleBlossom[500],
		],
		// darkVibrant: `linear-gradient(90deg, ${theme.colors.appleBlossom[500]}, ${theme.colors.orientalPink[300]})`,
		border: [
			defaultTheme.colors.appleBlossom[500],
			defaultTheme.colors.orientalPink[400],
		],
		button: {
			background: `linear-gradient(to right, ${defaultTheme.colors.appleBlossom[600]}, ${defaultTheme.colors.orientalPink[500]})`,
			"&:hover": {
				background: `linear-gradient(to right, ${defaultTheme.colors.appleBlossom[500]}, ${defaultTheme.colors.orientalPink[400]})`,
			},
			"&:active": {
				background: `linear-gradient(to right, ${defaultTheme.colors.appleBlossom[400]}, ${defaultTheme.colors.orientalPink[300]})`,
			},
			"&:focus": {
				background: `linear-gradient(to right, ${defaultTheme.colors.appleBlossom[700]}, ${defaultTheme.colors.orientalPink[600]})`,
				outline: `2px solid ${defaultTheme.colors.grey[100]}`
			}
		},
	},
	globals: {
		body: {
			backgroundColor: defaultTheme.colors.grey[900],
		},
	},
});


darkTheme.globals = {
	...darkTheme.globals,
	...darkTheme.typography
}

export default darkTheme