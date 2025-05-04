import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/logo.jpg";
import "./header.css";

export default function Header() {
	return (
		<div className="max-width-rapper-center">
			<div className="max-width-rapper">
				<header>
					<div className="logo">
						<img src={Logo} alt="Logo" className="logo" />
					</div>
					<Navbar />
				</header>
			</div>
		</div>
	);
}
