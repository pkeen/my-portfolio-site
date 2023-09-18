import React from "react";
import { useTheme } from "@emotion/react";
import ProjectListContainer from "../components/ProjectListContainer";
import ProjectCard from "../components/ProjectCard";
import { css } from "@emotion/react";

const projects = [
	{
		id: 1,
		title: "Zenora",
		description:
			"A PERN stack app designed for course creators, to rapidly create and curate courses.",
		imageUrl: "./public/zenora-preview-2.png",
		appLink: "https://zenora.vercel.app/",
		githubLink: "https://github.com/pkeen/zenora-frontend",
	},
	{
		id: 2,
		title: "Repertoire",
		description:
			"A MERN Stack app users can use to track workouts, with helpful exercise gifs.",
		imageUrl: "./public/repertoire-preview.png",
		appLink: "https://repertoire-23c95f862c5c.herokuapp.com/",
		githubLink: "https://github.com/pkeen/repertoire",
	},
	{
		id: 3,
		title: "Bubble Words",
		description:
			"A typing game built in vanilla javascript, users must type words to pop bubbles and earn points",
		imageUrl: "./bubble-words.png",
		appLink: "https://pkeen.github.io/BubbleWords/",
		githubLink: "https://github.com/pkeen/BubbleWords",
	},
	{
		id: 4,
		title: "Casharoo",
		description:
			"A Django app that allows users to track expenses and see a breakdown by categry",
		imageUrl: "casharoo-preview.png",
		appLink: "https://casharoo-f9e69a0a5271.herokuapp.com/",
		githubLink: "https://github.com/pkeen/casharoo",
	},
];

const Portfolio = () => {
	const theme = useTheme();
	const windowHeight = window.innerHeight;

	return (
		<section
			id="portfolio"
			css={{
				minHeight: windowHeight,
				// height: windowHeight,
				display: "flex",
				flexDirection: "column",
				// justifyContent: "center",
				alignItems: "center",
				textAlign: "left",
			}}
		>
			<div
				css={{
					width: "100%",
					height: "10px",
					flexShrink: 0, // This will prevent the div from growing or shrinking
					background: theme.colors.bittersweet[400],

					background: `linear-gradient(270deg, ${theme.gradients.border[0]} 0%, ${theme.gradients.border[1]})`,
				}}
			></div>
			<div
				css={{
					display: "flex",
					flexDirection: "row",
					width: "100%",
					flex: "1",
					// height: "100%"
				}}
			>
				<div // THIS
					css={{
						width: "10px",
						// height: "100%",
						background: `linear-gradient(0deg, ${theme.gradients.border[0]} 0%, ${theme.gradients.border[1]})`,
					}}
				></div>
				<div
					css={{
						flexGrow: "1",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<div
						css={{
							margin: "2%",
						}}
					>
						<h2
							css={{
								background: `linear-gradient(90deg, ${theme.gradients.h2[0]}, ${theme.gradients.h2[1]})`,
								// background: `linear-gradient(90deg, ${theme.colors.bittersweet[700]}, ${theme.colors.frangipani[400]})`, // alternative more bright
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
						>
							Portfolio
						</h2>
						<p>Check out some of my past work</p>
					</div>
					<ProjectListContainer>
						{projects.map((p) => (
							<ProjectCard project={p} key={p.id} />
						))}
					</ProjectListContainer>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
