import { useTheme } from "@emotion/react";

const ProjectListContainer = ({ children, className }) => {
	const theme = useTheme();

	return (
		<div
			css={{
				display: "grid",
				// gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gridTemplateColumns: "1fr",
				gap: "1vw 2vw",
				// gap: '2% 5%',
				flex: '1',

				[theme.breakpoints.md.higher]: {
					gridTemplateColumns:
						"repeat(2, 1fr)",
				},
			}}
			className={className}
		>
			{children}
		</div>
	);
};

export default ProjectListContainer;
