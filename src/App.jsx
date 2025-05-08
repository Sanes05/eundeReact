import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Impressum from "./pages/Impressum/Impressum";
import Leistungen from "./pages/Leistungen/Leistungen";
import Startseite from "./pages/Startseite";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Startseite />} />
				<Route path="leistungen" element={<Leistungen />} />
				<Route path="impressum" element={<Impressum />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
