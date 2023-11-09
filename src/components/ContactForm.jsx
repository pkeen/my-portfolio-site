import React, { useState } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import RhomboidGradientButton from "../components/RhomboidGradientButton";
import Button from "./Button";

const ContactForm = ({ className }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [message, setMessage] = useState({
		text: "",
		status: "",
	});

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await response.text();
			setMessage({ text: data });

			if (response.ok) {
				setMessage((prev) => ({ ...prev, status: "ok" }));
				setFormData({
					name: "",
					email: "",
					message: "",
				});
			}
		} catch (err) {
			setMessage({ text: "An error occurred" });
		}
	};

	return (
		<form className={className} onSubmit={handleSubmit}>
			<InputField
				type="text"
				name="name"
				id="name"
				value={formData.name}
				onChange={handleChange}
				label="Name"
			/>
			<InputField
				type="email"
				name="email"
				id="email"
				value={formData.email}
				onChange={handleChange}
				label="Email"
				required="true"
			/>
			<TextAreaField
				name="message"
				id="message"
				value={formData.message}
				onChange={handleChange}
				label="Message"
			/>
			<Button
				variant="gradient"
				css={{ marginTop: ".5rem" }}
				type="submit"
			>
				Send Message
			</Button>

			{message && (
				<div
					css={{
						marginTop: "1rem",
					}}
				>
					<p
						css={{
							color: `${
								message.status === "ok" ? "green" : "red"
							}`,
							fontWeight: '500'
						}}
					>
						{message.text}
					</p>
				</div>
			)}
		</form>
	);
};

export default ContactForm;
