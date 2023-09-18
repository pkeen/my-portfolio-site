import React from "react";
import { useTheme } from "@emotion/react";
import { merge } from "lodash";

const RhomboidGradientButton = ({
	children,
	onClick,
	className,
	type = "button",
	variant = "primary",
	size = "md",
}) => {
	const theme = useTheme();

	let css = {
		paddingRight: ".8rem",
		border: "none",
		outline: "none",
		WebkitAppearance: "none",
		MozAppearance: "none",
		appearance: "none",
		transition: "background-color .3s ease",
        transition: "margin 0.4s ease",
		color: theme.components.button.color,
		fontWeight: "700",
		"&:hover": {
			// backgroundColor: theme.colors.grey[600],
			cursor: "pointer",
			margin: "10px 0.5rem",
		},
		"&:active": {
			backgroundColor: theme.colors.grey[700],
		},
		backgroundColor: "transparent",
		color: theme.components.button.variants.rhomboid.color,
		// borderColor:
		//     theme.components.button.variants.rhomboid.borderColor,
		// borderRadius: "0.2rem",
		marginLeft: "0.5rem",
		// border: "1px solid white",
		transform: "skewX(20deg)",
	};

	let aroundButtonCss = {
		"&:hover": {
			backgroundColor:
				theme.components.button.variants.rhomboid.hover.backgroundColor,
            margin: '10px 0'
		},
		transform: "skew(-20deg)",
	};

	let borderSidesCss = {
		width: "5px",
		height: "100%",
		// background:
		// "linear-gradient(90deg, rgba(236,118,107,1) 0%, rgba(255,192,203,1) 100%)",
		background: `linear-gradient(0deg, ${theme.colors.appleBlossom[400]} 0%, ${theme.colors.orientalPink[300]})`,
		transform: "skew(-20deg)",
        border: 'none',
	};

	let borderTopBottom = {
		width: "100%",
		height: "5px",
		background: `linear-gradient(90deg, ${theme.colors.appleBlossom[400]} 0%, ${theme.colors.orientalPink[300]})`,
	};

	return (
		<div
			className={className}
			css={{
				display: "flex",
				flex: "0",
				alignItems: "center",
				height: "45px",
				// ...css
			}}
		>
			<div css={borderSidesCss}></div>
			<div
				css={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignItems: "center",
					height: "100%",
					...aroundButtonCss,
				}}
			>
				<div
					css={{
						...borderTopBottom,
						background: `linear-gradient(270deg, ${theme.colors.appleBlossom[400]} 0%, ${theme.colors.orientalPink[300]})`,
					}}
				></div>
				<button css={css} type={type} onClick={onClick}>
					{children}
				</button>
				<div css={borderTopBottom}></div>
			</div>
			<div
				css={{
					...borderSidesCss,
					background: `linear-gradient(180deg, ${theme.colors.appleBlossom[400]} 0%, ${theme.colors.orientalPink[300]})`,
				}}
			></div>
		</div>
	);
};

export default RhomboidGradientButton;
