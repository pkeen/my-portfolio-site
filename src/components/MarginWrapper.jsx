import React from "react";
import { useTheme } from "@emotion/react";

const MarginWrapper = ({ children }) => {
	const theme = useTheme();

	return (
		<div
			css={{
				// border: "1px dashed blue",
				margin: "0 1rem",
				[theme.breakpoints.sm.higher]: {
					margin: "0 10%",
				},
				// [theme.breakpoints.md.higher]: {
				// 	margin: "0 6rem",
				// },
				[theme.breakpoints.lg.higher]: {
					margin: "0 13%",
				},
				[theme.breakpoints.xl.higher]: {
					margin: "0 15%",
				},
			}}
		>
			{children}
		</div>
	);
};

export default MarginWrapper;
