import React from "react";
import { useTheme } from "@emotion/react";

const InputField = ({ type, name, id, value, onChange, label }) => {

	const theme = useTheme()

	return (
		<div
			css={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<label
				htmlFor={id}
				css={{
					textAlign: "left",
					// color: "white"
				}}
			>
				{label || name}
			</label>
			<input
				type={type}
				name={name}
				id={id}
				value={value}
				onChange={onChange}
				css={{
					margin: ".25rem 0",
					padding: ".5rem",
					borderRadius: ".5rem",
					border: "1px solid grey",
				}}
			></input>
		</div>
	);
};

export default InputField;
