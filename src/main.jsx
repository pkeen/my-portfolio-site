import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import App from './views/App.jsx'
import GlobalStyles2 from "./themes/GlobalStyles2.jsx";
import ThemeProvider from "./themes/ThemeProvider";
// import './index.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ThemeProvider>
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	</ThemeProvider>
);
