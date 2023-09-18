import React from 'react';

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
				// justifyContent: "center",
				alignItems: "center",
				textAlign: "left",
			}}
		></section>
	);
}

export default Contact;
