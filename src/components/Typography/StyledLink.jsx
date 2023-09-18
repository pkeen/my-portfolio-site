import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import ThemeContext from "../../themes/ThemeContext";

const StyledLink = ({ children, to }) => {
	// const { theme } = useContext(ThemeContext);
	const theme = useTheme();
	return (
		<a
			href={to}
			css={{
				color: theme.typography.a.color,
				"&:hover": {
					background: `linear-gradient(90deg, ${theme.gradients.h2[0]}, ${theme.gradients.h2[1]})`,
					// background: `linear-gradient(90deg, ${theme.colors.bittersweet[700]}, ${theme.colors.frangipani[400]})`, // alternative more bright
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					// textShadow: '0px -1px 2px',
				},
			}}
		>
			{children}
		</a>
	);
};

export default StyledLink;
