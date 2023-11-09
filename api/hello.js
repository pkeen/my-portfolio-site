export default (req, res) => {
	if (req.method === "POST") {
		console.log("Received data:", req.body);
		res.status(200).send(`Received: ${JSON.stringify(req.body)}`);
	} else {
		res.status(405).send("Method Not Allowed");
	}
};
