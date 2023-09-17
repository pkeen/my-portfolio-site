import React from "react";
import { useTheme } from "@emotion/react";

const ProjectTag = ({ children }) => {
	const theme = useTheme();

	return (
		<div
			css={{
				color: theme.colors.grey[500],
				padding: ".25rem .3rem",
				border: "1px solid",
				borderColor: theme.colors.grey[500],
				marginRight: ".1rem",
				borderRadius: ".5rem",
				fontSize: ".75rem",
				[theme.breakpoints.md.only]: {
					padding: ".125rem .2rem",
					fontSize: '.6rem'
				},
			}}
		>
			{children}
		</div>
	);
};

export default ProjectTag;
