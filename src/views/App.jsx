import React from "react";
import NavBar from "../components/NavBar/NavBar";
import MarginWrapper from "../components/MarginWrapper";
import Home from "./Home";
import Portfolio from "./Portfolio";

const App = () => {
	return (
		<MarginWrapper>
			<NavBar />
            <main>
                <Home />
                <Portfolio />
            </main>
		</MarginWrapper>
	);
};

export default App;
