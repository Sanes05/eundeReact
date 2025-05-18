import Navbar from "../Navbar/Navbar";

import Headlinecomponent from "../Headlinecomponent/Headlinecomponent";

import "./header.css";

export default function Header() {
	const headline = "E|E Gebäudereinigung ";
	const backgroundColor = {backgroundColor: "#0273cf"};

	return (
		<div className="max-width-rapper-center">
			<div className="max-width-rapper">
				<header>
					<div className="logo">
						<Headlinecomponent headline={headline} style={backgroundColor} />
					</div>
					<Navbar />
				</header>
			</div>
		</div>
	);
}
