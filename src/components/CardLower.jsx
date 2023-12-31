import React from "react";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import ThemeContext from "../themes/ThemeContext";

const CardLower = ({ children }) => {
	const { theme } = useContext(ThemeContext);

	const currentTheme = useTheme();

	return (
		<div
			css={{
				backgroundColor:
					theme === "dark"
						? currentTheme.colors.grey[800]
						: currentTheme.colors.grey[300],
				transition: 'background-color 0.5s',
				borderBottomRightRadius: "20px",
				borderBottomLeftRadius: "20px",
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				padding: '0rem 5%',
				'div': {
					marginRight: '5%'
				}
			}}
		>
			{children}
		</div>
	);
};

export default CardLower;
