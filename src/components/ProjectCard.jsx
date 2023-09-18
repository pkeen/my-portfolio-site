import CardLower from "./CardLower";
import { Link } from "react-router-dom";
import CardContainer from "./CardContainer";
import ProjectTags from "./ProjectTags";
import { useTheme } from "@emotion/react";
import { GitHub } from "@mui/icons-material";

const ProjectCard = ({ project }) => {
	const theme = useTheme();

	return (
		<a href={project.appLink}>
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
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							width: "100%",
						}}
					>
						<h3
							css={{
								[theme.breakpoints.md.only]: {
									fontSize: "1.3rem",
								},
								"@media (max-width: 400px)": {
									fontSize: "1.3rem",
								},
								background: `linear-gradient(90deg, ${theme.gradients.h3[0]}, ${theme.gradients.h3[1]})`,
								// background: `linear-gradient(90deg, ${theme.colors.bittersweet[700]}, ${theme.colors.frangipani[400]})`, // alternative more bright
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
						>
							{project.title}
						</h3>

						<a
							href={project.githubLink}
							css={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<GitHub />
						</a>
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
								"@media (max-width: 400px)": {
									fontSize: ".8rem",
								},
								"@media (max-width: 320px)": {
									fontSize: ".6rem",
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
		</a>
	);
};

export default ProjectCard;