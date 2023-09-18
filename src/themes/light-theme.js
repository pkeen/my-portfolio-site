import defaultTheme from "./default-theme";
import { merge } from "lodash";

const lightTheme = merge({}, defaultTheme, {
	backgroundColor: defaultTheme.colors.grey[50],
	typography: {
		h1: {
			color: defaultTheme.colors.grey[900],
		},
		h2: {
			color: defaultTheme.colors.grey[400],
		},
		h3: {
			color: defaultTheme.colors.grey[700],
		},
		h4: {
			color: defaultTheme.colors.grey[600],
		},
		h5: {
			color: defaultTheme.colors.grey[500],
		},
		p: {
			color: defaultTheme.colors.grey[600],
		},
		blockquote: {
			color: defaultTheme.colors.grey[600],
		},
		a: {
			color: defaultTheme.colors.grey[700],
			"&: hover": {
				color: defaultTheme.colors.grey[600],
			},
		},
	},
	components: {
		button: {
			color: defaultTheme.colors.grey[50],
			variants: {
				rhomboid: {
					color: defaultTheme.colors.grey[700],
					borderColor: defaultTheme.colors.grey[700],
					hover: {
						backgroundColor: defaultTheme.colors.grey[200],
					},
				},
			},
		},
	},
	gradients: {
		h1: [defaultTheme.colors.grey[900], defaultTheme.colors.pink[700]],
		h2: [
			defaultTheme.colors.appleBlossom[400],
			defaultTheme.colors.orientalPink[200],
		],
		h3: [
			defaultTheme.colors.orientalPink[400],
			defaultTheme.colors.appleBlossom[600],
		],
		border: [
			defaultTheme.colors.appleBlossom[500],
			defaultTheme.colors.orientalPink[400],
		],
		// darkVibrant: `linear-gradient(90deg, ${theme.colors.appleBlossom[500]}, ${theme.colors.orientalPink[300]})`,
	},
	globals: {
		body: {
			backgroundColor: defaultTheme.colors.grey[50],
		},
	},
});

lightTheme.globals = merge(lightTheme.globals, lightTheme.typography)

export default lightTheme;
