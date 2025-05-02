import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Impressum from "./pages/impressum";
import Startseite from "./pages/Startseite";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Startseite />} />
				<Route path="leistungen" />
				<Route path="impressum" element={<Impressum />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
