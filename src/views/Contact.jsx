import React from "react";
import { useTheme } from "@emotion/react";
import RhomboidGradientButton from "../components/RhomboidGradientButton";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import Discord from "../components/Discord";
import IconButton from "../components/IconButton";
import Email from "../components/Email";

const Contact = () => {
	const theme = useTheme();
	const windowHeight = window.innerHeight;

	return (
		<section
			id="contact"
			css={{
				minHeight: windowHeight,
				height: windowHeight,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				textAlign: "left",
			}}
		>
			<div
				css={{
					width: "100%",
					height: "10px",
					// background:
					// "linear-gradient(90deg, rgba(236,118,107,1) 0%, rgba(255,192,203,1) 100%)",
					background: `linear-gradient(90deg, ${theme.gradients.border[0]} 0%, ${theme.gradients.border[1]})`,
				}}
			></div>
			<div
				css={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					height: "100%",
					width: "100%",
				}}
			>
				<div // this
					css={{
						flex: "1",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "start",
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
							Drop me a line
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
							I'd love to hear from you
						</h2>
						<blockquote
							css={{ textAlign: "left", marginTop: "1rem" }}
						>
							Whether you want to hire me, collaborate, or just
							talk tech
						</blockquote>

						<Email css={{ marginTop: "1rem" }}>
							pkeen7@gmail.com
						</Email>

						<div
							css={{
								display: "flex",
								marginTop: "1rem",
								div: {
									marginRight: "1rem",
								},
							}}
						>
							<a href="https://www.linkedin.com/in/stephen-keen">
								<IconButton ariaLabel="Link to LinkedIn Profile">
									<LinkedIn
										css={{
											background: `linear-gradient(90deg, ${theme.gradients.h2[0]}, ${theme.gradients.h2[1]})`,
											// background: `linear-gradient(90deg, ${theme.colors.bittersweet[700]}, ${theme.colors.frangipani[400]})`, // alternative more bright
											WebkitBackgroundClip: "svg",
											WebkitTextFillColor: "transparent",
											borderRadius: "3px",
											color: "black",
										}}
									/>
								</IconButton>
							</a>
							<a href="https://github.com/pkeen">
								<IconButton ariaLabel="Link to GitHub Profile">
									<GitHub
										css={{
											background: `linear-gradient(90deg, ${theme.gradients.h2[0]}, ${theme.gradients.h2[1]})`,
											// background: `linear-gradient(90deg, ${theme.colors.bittersweet[700]}, ${theme.colors.frangipani[400]})`, // alternative more bright
											WebkitBackgroundClip: "svg",
											WebkitTextFillColor: "transparent",
											borderRadius: "3px",
											color: "black",
										}}
									/>
								</IconButton>
							</a>
							<a href="https://www.instagram.com/pete_keen/">
								<IconButton ariaLabel="Link to Instagram Profile">
									<Instagram
										css={{
											background: `linear-gradient(90deg, ${theme.gradients.h2[0]}, ${theme.gradients.h2[1]})`,
											// background: `linear-gradient(90deg, ${theme.colors.bittersweet[700]}, ${theme.colors.frangipani[400]})`, // alternative more bright
											WebkitBackgroundClip: "svg",
											WebkitTextFillColor: "transparent",
											borderRadius: "3px",
											color: "black",
										}}
									/>
								</IconButton>
							</a>
						</div>
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
						background: `linear-gradient(0deg, ${theme.gradients.border[0]} 0%, ${theme.gradients.border[1]})`,
					}}
				></div>
			</div>
		</section>
	);
};

export default Contact;
