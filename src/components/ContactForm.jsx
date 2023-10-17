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

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<form className={className}>
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
			/>
			<TextAreaField
				name="message"
				id="message"
				value={formData.message}
				onChange={handleChange}
				label="Message"
			/>
			<Button variant="gradient" css={{marginTop: '.5rem'}}>Send Message</Button>
		</form>
	);
};

export default ContactForm;
