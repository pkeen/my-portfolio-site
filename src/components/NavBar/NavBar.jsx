import React, { useState, useEffect } from "react";
import ThemeSelector from "./ThemeSelector/ThemeSelector";
import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";
import { css } from "@emotion/react";
import Hamburger from "./Hamburger";
import { useTheme } from "@emotion/react";

const NavBar = () => {

	const theme = useTheme();

	const hideSmallCss = {
		[theme.breakpoints.sm.lower]: {
			display: "none",
		},
	};

	return (
		<header>
			<nav
				css={{
					border: "1px solid red",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					height: "70px",
					position: "sticky",
					top: 0,
					zIndex: 1000, // Ensure the navbar stays above other content
				}}
			>
				<div
					css={{
						display: "flex",
						alignItems: "center",
						div: {
							marginRight: "1rem",
						},
					}}
				>
					<Logo />
				</div>

				<div
					css={css`
						display: flex;
						border: 1px solid red;
						align-items: center;
						justify-content: space-between;
						div,
						a {
							margin-left: 1rem;
						}
					`}
				>
					<NavigationMenu css={hideSmallCss} />
					<ThemeSelector css={hideSmallCss} />
					<Hamburger />
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
