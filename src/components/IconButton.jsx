import React from "react";
import { useTheme } from "@emotion/react";


const IconButton = ({
	children,
	onClick,
	className,
	ariaLabel,
	type = "button",
	variant = "primary",
	size = "md",
}) => {
	const theme = useTheme();

	console.log(theme);

	let css = {
        display: 'flex',
		padding: "0rem",
		borderRadius: "1rem",
		border: "none",
		outline: "none",
		WebkitAppearance: "none",
		MozAppearance: "none",
		appearance: "none",
		transition: "background-color .3s ease",
		backgroundColor: theme.colors.grey[900],
		color: theme.colors.grey[50],
		fontWeight: "700",
		"&:hover": {
			backgroundColor: theme.colors.grey[600],
			cursor: 'pointer'
		},
		"&:active": {
			backgroundColor: theme.colors.grey[700],
		},
	};

	let extraCss;

	switch (variant) {
		case "ghost":
			extraCss = {
				backgroundColor: "transparent",
				border: `1px solid ${theme.colors.grey[500]}`,
				color: theme.colors.grey[500],
				transition: "border 1.8 ease",
				"&:hover": {
					borderColor: theme.colors.grey[400],
				},
			};
			css = { ...css, ...extraCss };
			break;
		case "gradient":
			extraCss = {
				"svg": {
					background: `linear-gradient(90deg, ${theme.gradients.h2[0]}, ${theme.gradients.h2[1]})`,
					// background: `linear-gradient(90deg, ${theme.colors.bittersweet[700]}, ${theme.colors.frangipani[400]})`, // alternative more bright
					WebkitBackgroundClip: "svg",
					WebkitTextFillColor: "transparent",
					borderRadius: "3px",
				}
			}
	}
	

	switch (size) {
		case "sm": {
			const extraCss = {
				padding: "0.3rem .75rem",
			};
			css = { ...css, ...extraCss };
		}
	}

	return (
		<div>
			<button
				css={css}
				className={className}
				type={type}
				onClick={onClick}
				ariaLabel={ariaLabel}
			>
				{children}{" "}
			</button>
		</div>
	);
};

export default IconButton;
