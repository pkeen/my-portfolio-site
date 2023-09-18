import React from "react";
import { useTheme } from "@emotion/react";
import { merge } from "lodash";

const Email = ({
	children,
	onClick,
	className,
}) => {
	const theme = useTheme();



	let borderSidesCss = {
		width: "5px",
		height: "100%",
		// background:
		// "linear-gradient(90deg, rgba(236,118,107,1) 0%, rgba(255,192,203,1) 100%)",
		background: `linear-gradient(0deg, ${theme.colors.appleBlossom[400]} 0%, ${theme.colors.orientalPink[300]})`,
		// transform: "skew(-20deg)",
		border: "none",
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
					justifyContent: "center",
					alignItems: "center",
					height: "100%",
				}}
			>
				<p css={{
                    padding: '1rem',
                    color: theme.typography.h3.color
                }}>{children}</p>
			</div>
		</div>
	);
};

export default Email;
