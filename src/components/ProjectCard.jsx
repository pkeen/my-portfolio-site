import CardLower from "./CardLower";
import { Link } from "react-router-dom";
import CardContainer from "./CardContainer";
import ProjectTags from "./ProjectTags";
import { useTheme } from "@emotion/react";

const ProjectCard = ({ project }) => {
	const theme = useTheme();

	return (
		<CardContainer>
			<div
				css={{
					// display: "flex",
					overflow: "hidden",
					borderTopLeftRadius: "20px",
					borderTopRightRadius: "20px",
				}}
			>
				<img
					src={project.imageUrl.toString()}
					css={{
						width: "100%",
						height: "auto",
					}}
				></img>
			</div>
			{/*  body */}
			<CardLower>
				<div
					css={{
						textAlign: "left",
					}}
				>
					<h2
						css={{
							[theme.breakpoints.md.only]: {
								fontSize: "1.3rem",
							},
						}}
					>
						{project.title}
					</h2>
				</div>

				<div
					css={{
						margin: "-1rem 0",
						textAlign: "left",
						overflow: "hidden",
					}}
				>
					<p
						css={{
							[theme.breakpoints.md.only]: {
								fontSize: ".8rem",
							},
						}}
					>
						{project.description}
					</p>
				</div>
				<div>
					<ProjectTags />
				</div>
				{/* <div>
						<Button variant="ghost">Learn More</Button>
					</div> */}
			</CardLower>

			{/* <p style={{ color: `${purple[400]}` }} color={purple.purple400}>
					by {project.User.name}
				</p>
				{user.id === course.userId && (
					<div>
						<button onClick={() => handleDelete(course.id)}>
							Delete
						</button>
						<button onClick={handleChangeUpdating}>
							{isUpdating ? "Save" : "Edit"}
						</button>
					</div>
				)} */}
		</CardContainer>
		// </Link>
	);
};

export default ProjectCard;
