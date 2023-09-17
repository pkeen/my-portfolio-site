import React from "react";
import NavBar from "../components/NavBar/NavBar";
import MarginWrapper from "../components/MarginWrapper";
import Home from "./Home";

const App = () => {
	return (
		<MarginWrapper>
			<NavBar />
            <main>
                <Home />
                
            </main>
		</MarginWrapper>
	);
};

export default App;
