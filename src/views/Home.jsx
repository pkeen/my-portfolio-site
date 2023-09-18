import React from "react";
import { useTheme } from "@emotion/react";
import Button from "../components/Button";

const Home = () => {
	const theme = useTheme();
	const windowHeight = window.innerHeight;

	return (
		<section
			id="home"
			css={{
				minHeight: windowHeight - 80,
				height: windowHeight - 80,
				display: "flex",
				flexDirection: "column",
				// borderImage:
				// 	"linear-gradient(to bottom, red, rgba(0, 0, 0, 0)) 1 100%",
				// borderTop: "4px solid #ff6f61",
				// borderRight: "4px solid #E6E6FA",
			}}
		>
			<div
				css={{
					width: "100%",
					height: "10px",
					background:
						"linear-gradient(90deg, rgba(236,118,107,1) 0%, rgba(255,192,203,1) 100%)",
				}}
			></div>
			<div
				css={{
					display: "flex",
					flexDirection: "row",
					height: "100%",
				}}
			>
				<div // this
					css={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						textAlign: "left",
					}}
				>
					<div css={{ marginTop: "-4rem" }}>
						<h1>Stephen Keen</h1>
						<h2 css={{ marginTop: "-1rem" }}>
							Full-Stack Developer
						</h2>
						<blockquote
							css={{ textAlign: "left", marginTop: "1rem" }}
						>
							Striving for pixel perfect design, with meticulous
							code and boundless creativity.
						</blockquote>
						<blockquote css={{ marginTop: ".5rem" }}>
							With each project, I bring a commitment to
							excellence, a passion for innovation, and sharp
							attention to detail.
						</blockquote>
						<a href="/resume.pdf">
							<Button
								variant="rhomboid"
								css={{ marginTop: "1rem" }}
							>
								View my resume
							</Button>
						</a>
					</div>
				</div>
				<div
					css={{
						width: "10px",
						height: "100%",
						// backgroundColor: "#F76D60",
						background: "rgb(247,109,96)",
						background:
							"linear-gradient(0deg, rgba(236,118,107,1) 0%, rgba(255,192,203,1) 100%)",
					}}
				></div>
			</div>
			{/* <div // this
				css={{}}
			>
				<div css={{ marginTop: "-4rem" }}>
					<h1>Stephen Keen</h1>
					<h2 css={{ marginTop: "-1rem" }}>Full-Stack Developer</h2>
					<blockquote css={{ textAlign: "left", marginTop: "1rem" }}>
						Striving for pixel perfect design, with meticulous code
						and boundless creativity.
					</blockquote>
					<blockquote css={{ marginTop: ".5rem" }}>
						With each project, I bring a commitment to excellence, a
						passion for innovation, and sharp attention to detail.
					</blockquote>
					<a href="/resume.pdf">
						<Button variant="rhomboid" css={{ marginTop: "1rem" }}>
							View my resume
						</Button>
					</a>
				</div>
			</div> */}
		</section>
	);
};

export default Home;
