const breakpoints = [500, 700, 1000, 1200, 1400];

const mq = breakpoints.map((bp, idx) => {
	return {
		higher: `@media (min-width: ${bp}px)`,
		lower: `@media (max-width: ${bp}px)`,
		only: `@media (min-width: ${bp}px) and (max-width: ${
			breakpoints[idx + 1]
		}px)`,
	};
});

const theme = {
	root: {
		baseFontSize: "16px",
	},
	colors: {
		grey: {
			50: "#FAFAFA",
			100: "#F5F5F5",
			200: "#EEEEEE",
			300: "#E0E0E0",
			400: "#BDBDBD",
			500: "#9E9E9E",
			600: "#757575",
			700: "#616161",
			800: "#424242",
			900: "#212121",
		},
		bittersweet: {
			50: "#fff2f1",
			100: "#ffe4e1",
			200: "#ffccc7",
			300: "#ffa8a0",
			400: "#ff6f61",
			500: "#f84c3b",
			600: "#e52f1d",
			700: "#c12314",
			800: "#a02014",
			900: "#842218",
			950: "#480d07",
		},
		frangipani: {
			50: "#fff6ed",
			100: "#ffead5",
			200: "#ffdab9",
			300: "#ffb172",
			400: "#fd853a",
			500: "#fc6413",
			600: "#ed4809",
			700: "#c4340a",
			800: "#9c2a10",
			900: "#7d2511",
			950: "#441006",
		},
		gold: {
			50: "#ffffe7",
			100: "#feffc1",
			200: "#fffd86",
			300: "#fff441",
			400: "#ffe60d",
			500: "#ffd700",
			600: "#d19e00",
			700: "#a67102",
			800: "#89580a",
			900: "#74480f",
			950: "#442604",
		},
		pink: {
			50: "#fff1f3",
			100: "#ffe3e7",
			200: "#ffc0cb",
			300: "#ffa2b3",
			400: "#fe6e8b",
			500: "#f83b66",
			600: "#e51951",
			700: "#c20e43",
			800: "#a20f40",
			900: "#8a113c",
			950: "#4d041c",
		},
		orientalPink: {
			50: "#faf6f6",
			100: "#f6edee",
			200: "#eddee0",
			300: "#dec3c6",
			400: "#c19098",
			500: "#b57e89",
			600: "#9c6270",
			700: "#824e5c",
			800: "#6e4350",
			900: "#5f3c48",
			950: "#331e24",
		},
		appleBlossom: {
			50: "#fbf6f5",
			100: "#f8e9e8",
			200: "#f2d8d6",
			300: "#e8bdb9",
			400: "#d99690",
			500: "#c7746c",
			600: "#a8524a",
			700: "#954740",
			800: "#7c3e38",
			900: "#683834",
			950: "#371b18",
		},
	},
	typography: {
		h1: {
			fontSize: "2.25rem",
			fontWeight: 800,
			margin: "1rem 0",
		},
		h2: {
			fontSize: "1.8rem",
			fontWeight: 700,
			margin: ".75rem 0",
		},
		h3: {
			fontSize: "1.33rem",
			fontWeight: 600,
			margin: ".33rem 0rem",
		},
		h4: {
			fontSize: "1.25rem",
			fontWeight: 500,
			margin: ".25rem 0rem",
		},
		h5: {
			fontSize: "1.0rem",
			fontWeight: 500,
			margin: ".125rem 0rem",
		},
		p: {
			fontSize: "1rem 0",
		},
		a: {
			fontSize: "1rem 0",
		},
	},
	border: {
		radius: {
			round: "3rem",
			md: "1rem",
		},
	},
	breakpoints: {
		sm: mq[0],
		md: mq[1],
		lg: mq[2],
		xl: mq[3],
		xxl: mq[4],
	},
};

theme.typography = {
	...theme.typography,
	input: {
		backgroundColor: "transparent",
		transition: "background 0.5 ease",
		color: theme.colors.grey[500],
	},
	label: {
		color: theme.colors.grey[500],
	},
	textArea: {
		backgroundColor: "transparent",
		transition: "background 0.5 ease",
		color: theme.colors.grey[500],
	},
};

theme.globals = {
	html: {
		fontSize: theme.root.baseFontSize,
	},
	body: {
		backgroundColor: theme.colors.grey[500],
	},
	"*": {
		transition: "background 0.5 ease",
	},
	...theme.typography,
};

export default theme;
