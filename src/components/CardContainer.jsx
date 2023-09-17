import React from "react";

const CardContainer = ({ children }) => {
	return (
		<div
			css={{
				position: "relative",
				transition: "transform 0.3s ease",
				"&:hover": {
					transform: "scale(1.05)",
				},
				margin: "5%" /* Add margins to grid items for flexible spacing */,
				"&::before": {
					content: "''",
					display: "block",
					paddingBottom: "110%",
				},
			}}
		>
			<div
				css={{
					// border: '1px solid blue',
					display: "grid",
					gridTemplateRows: "4fr 5fr",
					borderRadius: "20px",
					position: "absolute",
					height: "100%",
					top: "0",
					left: "0",
					right: "0",
					bottom: "0",
					overflow: "hidden", // Prevents content from spilling out
					minHeight: "100%", // Ensures grid container maintains a minimum height
					// margin: '10vw'
					// margin: '1vh 1vw 1vh 1vw'
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default CardContainer;
