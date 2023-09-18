import React from "react";
import { useTheme } from "@emotion/react";
import Button from "../components/Button";
import RhomboidGradientButton from "../components/RhomboidGradientButton";

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
			}}
		>
			<div
				css={{
					width: "100%",
					height: "10px",
					// background:
					// "linear-gradient(90deg, rgba(236,118,107,1) 0%, rgba(255,192,203,1) 100%)",
					background: `linear-gradient(90deg, ${theme.colors.appleBlossom[400]} 0%, ${theme.colors.orientalPink[300]})`,
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
						<h1
							css={{
								background: `linear-gradient(90deg, ${theme.gradients.h1[0]}, ${theme.gradients.h1[1]})`,
								// background: `linear-gradient(90deg, ${theme.colors.bittersweet[700]}, ${theme.colors.frangipani[400]})`, // alternative more bright
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
						>
							Stephen Keen
						</h1>
						<h2
							css={{
								marginTop: "-1rem",
								background: `linear-gradient(90deg, ${theme.gradients.h2[0]}, ${theme.gradients.h2[1]})`,
								// background: `linear-gradient(90deg, ${theme.colors.bittersweet[700]}, ${theme.colors.frangipani[400]})`, // alternative more bright
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
						>
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
							{/* <Button
								variant="rhomboid"
								css={{ marginTop: "1rem" }}
							>
								View my resume
							</Button> */}
							<RhomboidGradientButton css={{
								marginTop: '1rem'
							}}>Download Resume</RhomboidGradientButton>
						</a>
					</div>
				</div>
				<div
					css={{
						width: "10px",
						height: "100%",
						// backgroundColor: "#F76D60",
						background: "rgb(247,109,96)",
						// background:
						// 	"linear-gradient(0deg, rgba(236,118,107,1) 0%, rgba(255,192,203,1) 100%)",
						background: `linear-gradient(0deg, ${theme.colors.bittersweet[400]} 0%, ${theme.colors.pink[200]})`,
					}}
				></div>
			</div>
		</section>
	);
};

export default Home;
