import React from "react";
import { useTheme } from "@emotion/react";
import { Directions } from "@mui/icons-material";
import Button from "../components/Button";

const Home = () => {
	const theme = useTheme();
	const windowHeight = window.innerHeight;

	return (
		<section
			id="home"
			css={{
				minHeight: windowHeight - 80,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "left",
			}}
		>
			<div css={{ marginTop: "-4rem" }}>
				<h1>Peter Keen</h1>
				<h2 css={{ marginTop: "-1rem" }}>Full-Stack Developer</h2>
				<blockquote css={{ textAlign: "left", marginTop: "1rem" }}>
					Breathing life into designs with meticulous code and
					boundless creativity.
				</blockquote>
				<blockquote css={{ marginTop: ".5rem" }}>
					With each project, I bring a commitment to excellence, a
					passion for innovation, and a meticulous attention to
					detail.
				</blockquote>
				<Button variant="rhomboid" css={{ marginTop: "1rem" }}>
					View my resume
				</Button>
			</div>
		</section>
	);
};

export default Home;
