import logo from "./logo.svg";
import "@/styles/App.css";
import headShot from "@/assets/picture.jpg";
import InitialRouter from "@/navigation/initialRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<div id="App">
			<Router>
				<InitialRouter />
			</Router>
		</div>
	);
}

export default App;
