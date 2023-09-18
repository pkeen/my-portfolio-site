import React from "react";
import NavBar from "../components/NavBar/NavBar";
import MarginWrapper from "../components/MarginWrapper";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const App = () => {
	return (
		<MarginWrapper>
			<NavBar />
            <main>
                <Home />
                <Portfolio />
				<Contact />
            </main>
		</MarginWrapper>
	);
};

export default App;
