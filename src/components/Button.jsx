import React from "react";
import { useTheme } from "@emotion/react";
import { merge } from "lodash";

const Button = ({
	children,
	onClick,
	className,
	type = "button",
	variant = "primary",
    size = "md"
}) => {
	const theme = useTheme();

	let spanCss = {};
	let css = {
		padding: "1rem",
		borderRadius: ".5rem",
		border: "none",
		outline: "none",
		WebkitAppearance: "none",
		MozAppearance: "none",
		appearance: "none",
		transition: "background-color .3s ease",
		backgroundColor: theme.colors.grey[500],
		color: theme.components.button.color,
		fontWeight: "700",
		"&:hover": {
			backgroundColor: theme.colors.grey[600],
			cursor: 'pointer',
		},
		"&:active": {
			backgroundColor: theme.colors.grey[700],
		},
	};	

	let variantCss;

	switch (variant) {
		case "ghost":
			variantCss = {
				backgroundColor: "transparent",
				border: `1px solid ${theme.colors.grey[500]}`,
				color: theme.colors.grey[500],
				transition: "border 1.8 ease",
				"&:hover": {
					borderColor: theme.colors.grey[400],
				},
			};
            break;
		case "special":
			variantCss = {
				backgroundColor: "transparent",
				border: "none",
				borderLeft: `1px solid ${theme.colors.grey[400]}`,
			};
			break;
			case "gradient": {
				variantCss = {
					...theme.gradients.button
				}
			break;
		}
		case "rhomboid":
			variantCss = {
				backgroundColor: "transparent",
				color: theme.components.button.variants.rhomboid.color,
				borderColor: theme.components.button.variants.rhomboid.borderColor,
				borderRadius: "0.2rem",
				marginLeft: "0.5rem",
				border: "1px solid white",
				transform: "skewX(-20deg)",
				'&:hover': {
					backgroundColor: theme.components.button.variants.rhomboid.hover.backgroundColor
				},
				// borderLeft: `1px solid ${theme.colors.grey[400]}`,
				"&:before": {
					content: `""`,
					position: "relative",
					zIndex: "-1",
					top: "0",
					left: "0",
					right: "0",
					bottom: "0",
					width: "100%",
					background: "blue",
				},
				"& .unskew-text": {
					transform: "skewX(20deg)",
				},
			};
			spanCss = {
				transform: "skewX(20deg)",
			};
			break;
		default:
			variantCss = {}
	}

	// css = { ...css, ...variantCss};
	css = merge(css, variantCss)

    switch (size) {
        case "sm": {
            const sizeCss = {
                padding: '.5rem .75rem'
            }
            css = {...css, ...variantCss, ...sizeCss}
        }
    }

	return (
		<div>
			<button
				css={css}
				className={className}
				type={type}
				onClick={onClick}
			>
				<div className="unskew-text">{children}</div>
			</button>
		</div>
	);
};

export default Button;
