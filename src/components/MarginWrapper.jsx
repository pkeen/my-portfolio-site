import React from "react";
import { useTheme } from "@emotion/react";

const MarginWrapper = ({ children }) => {
	const theme = useTheme();

	return (
		<div
			css={{
				border: "1px solid red",
				margin: "0 1rem",
				[theme.breakpoints.sm.higher]: {
					margin: "0 3rem",
				},
				[theme.breakpoints.md.higher]: {
					margin: "0 6rem",
				},
				[theme.breakpoints.lg.higher]: {
					margin: "0 10rem",
				},
				[theme.breakpoints.xl.higher]: {
					margin: "0 15rem",
				},
			}}
		>
			{children}
		</div>
	);
};

export default MarginWrapper;
