import React, { useContext } from "react";
import { useTheme } from "@emotion/react";
import StyledLink from "../Typography/StyledLink";

const NavigationMenu = ({ className }) => {
	const theme = useTheme();

	return (
		<div className={className}>
			<StyledLink to="#about">About</StyledLink>
			<StyledLink to="#portfolio">Portfolio</StyledLink>
			<StyledLink to="#contact">Contact</StyledLink>
		</div>
	);
};

export default NavigationMenu;
