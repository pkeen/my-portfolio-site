// send email using Brevo API

export default async (req, res) => {
	if (req.method !== "POST") {
		res.status(405).send("Error: Must be a post request");
	}

	try {
		// Parse the form data from the request
		const data = req.body;

		console.log(data.message);

		// Construct the email data payload
		const emailData = {
			sender: { email: "pkeen7@gmail.com", name: "Stephen Keen" },
			to: [{ email: "pkeen7@gmail.com" }],
			replyTo: { email: data.email, name: data.name }, // This is the email of the person who filled out the form
			subject: "New Contact Form Submission",
			htmlContent: `<p>New contact form submission:</p><p>From: ${data.name}</p><p>Email: ${data.email}</p><p>${data.message}</p>`,
		};

		console.log(emailData);

		// Send the email using Brevo API
		const brevoResponse = await fetch(
			"https://api.brevo.com/v3/smtp/email",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"api-key": process.env.BREVO_API_KEY, // Replace with your actual API key
				},
				body: JSON.stringify(emailData),
			}
		);

		// Handle Brevo response
		if (!brevoResponse.ok) {
			throw new Error(
				`Email not sent, status code: ${brevoResponse.status}`
			);
		}

        // Response to display in UI
		res.status(200).send(`Your email was sent succesfully. I will be in touch shortly!`);
	} catch (err) {
		res.status(500).send(`An error occurred: ${err.message || 'unkown'}`);
	}
};
