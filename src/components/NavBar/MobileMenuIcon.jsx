import React, { useState, useEffect } from "react";
import { Menu, Close } from "@mui/icons-material";
import IconButton from "../IconButton";
import { useTheme } from "@emotion/react";
import NavigationMenu from "./NavigationMenu";

const MobileMenuIcon = ({mobileMenuOpen , setMobileMenuOpen}) => {
	const theme = useTheme();
	const [open, setOpen] = useState(false);

	// useEffect(() => {
	// 	const display = open ? "flex" : "none";
	// 	console.log(display)
	// 	css = {
	// 		display: display
	// 	}
	// 	console.log(css);
	// }, [open]);
	

	const hamburgerCss = {
		transition: "background-color 0.3s ease", // Corrected transition value
		[theme.breakpoints.sm.higher]: {
			display: "none",
		},
	};

	const handleClick = () => {
		setMobileMenuOpen((prev) => !prev);
		console.log(open)
	}

	// console.log(open ? "flex" : "none")

	// css = {menuCss}

	return (
			<IconButton
				variant="ghost"
				size="sm"
				css={hamburgerCss}
				onClick={handleClick}
				role="button"
				ariaLabel="menu"
			>
				{mobileMenuOpen ? <Close /> : <Menu />}
			</IconButton>
	);
};

export default MobileMenuIcon;
