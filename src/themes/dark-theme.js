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
			color: defaultTheme.colors.grey[500],
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