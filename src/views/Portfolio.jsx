import React from "react";
import { useTheme } from "@emotion/react";
import ProjectListContainer from "../components/ProjectListContainer";
import ProjectCard from "../components/ProjectCard";

const projects = [
	{
		title: "Zenora",
		description:
			"A PERN stack app designed for course creators, to rapidly create and curate courses.",
		imageUrl: "./public/zenora-preview-2.png",
	},
	{
		title: "Repertoire",
		description:
			"A MERN Stack app usrs can use to track workouts, with helpful exercise gifs.",
		imageUrl: "./public/repertoire-preview.png",
	},
	{
		title: "Zenora",
		description:
			"A PERN stack app designed for course creators, to rapidly create and curate courses.",
		imageUrl: "./public/zenora-preview-2.png",
	},
	{
		title: "Repertoire",
		description:
			"A MERN Stack app usrs can use to track workouts, with helpful exercise gifs.",
		imageUrl: "./public/repertoire-preview.png",
	},
];

const Portfolio = () => {
	const theme = useTheme();
	const windowHeight = window.innerHeight;

	return (
		<section
			id="home"
			css={{
				border: "1px solid blue",
				minHeight: windowHeight - 80,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "left",
			}}
		>
			<div css={{ border: "1px solid red", width: "100%" }}>
				<h2>Portfolio</h2>

				<ProjectListContainer>
					{projects.map((p, idx) => (
						<ProjectCard project={p} key={idx} />
					))}
				</ProjectListContainer>
			</div>
		</section>
	);
};

export default Portfolio;
