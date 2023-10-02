import React, { useState, useEffect } from "react";
import ThemeSelector from "./ThemeSelector/ThemeSelector";
import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";
import { css } from "@emotion/react";
import MobileMenuIcon from "./MobileMenuIcon";
import { useTheme } from "@emotion/react";

const NavBar = () => {
	const theme = useTheme();

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const hideSmallCss = {
		[theme.breakpoints.sm.lower]: {
			display: "none",
		},
	};

	return (
		<header>
			<nav>
				<div
					css={{
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
							align-items: center;
							justify-content: space-between;
							/* div, */
							a {
								margin-right: 1rem;
							}
						`}
					>
						<NavigationMenu css={hideSmallCss} />
						<ThemeSelector css={hideSmallCss} />
						<MobileMenuIcon
							mobileMenuOpen={mobileMenuOpen}
							setMobileMenuOpen={setMobileMenuOpen}
						/>
					</div>
				</div>
				<div
					css={{
						display: mobileMenuOpen ? "flex" : "none",
						color: "white",
						width: '100%',
						justifyContent: 'center'
					}}
				>
					<NavigationMenu
						css={{
							display: "flex",
							flexDirection: "column",
							textAlign: "right",
							alignItems: "center",
							padding: "1rem 0",
							"& > a": {
								paddingBottom: ".5rem",
							},
						}}
					/>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
