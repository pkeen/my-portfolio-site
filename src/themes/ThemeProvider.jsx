import React, { useContext, useState } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import ThemeContext from "./ThemeContext";
import lightTheme from "./light-theme";
import GlobalStyles from "./GlobalStyles";
import GlobalStyles2 from "./GlobalStyles2";
import darkTheme from "./dark-theme";

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	const currentTheme = theme === "light" ? lightTheme : darkTheme;

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<EmotionThemeProvider theme={currentTheme}>
				<GlobalStyles2 theme={currentTheme} />
				{children}
			</EmotionThemeProvider>
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
