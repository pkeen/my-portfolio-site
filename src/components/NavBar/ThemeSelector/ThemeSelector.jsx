import React, { useContext } from "react";
import ThemeContext from "../../../themes/ThemeContext";
import IconButton from "../../IconButton";
import { useTheme } from "@emotion/react";
import { DarkMode } from "@mui/icons-material";
import { LightMode } from "@mui/icons-material";

const ThemeSelector = ({ className }) => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	const themeObject = useTheme();

	let css = {
		background: `linear-gradient(90deg, ${themeObject.gradients.h2[0]}, ${themeObject.gradients.h2[1]})`,
		// background: `linear-gradient(90deg, ${theme.colors.bittersweet[700]}, ${theme.colors.frangipani[400]})`, // alternative more bright
		WebkitBackgroundClip: "svg",
		WebkitTextFillColor: "transparent",
		borderRadius: "3px",
		color: "black",
	};
	return (
		<div>
			<IconButton
				onClick={toggleTheme}
				ariaLabel="Toggle between light and dark visual themes"
				variant="gradient"
				size={"sm"}
				className={className}
			>
				{theme === "light" ? <DarkMode css={css}/> : <LightMode css={css}/>}
			</IconButton>
		</div>
	);
};

export default ThemeSelector;
