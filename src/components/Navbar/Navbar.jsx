import {Link} from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
	const navBaritems = [
		{
			href: "/",
			label: "Startseite"
		},
		{
			href: "leistungen",
			label: "Leistungen"
		},
		{
			href: "impressum",
			label: "Impressum & Kontakt"
		}
	];

	return (
		<>
			<nav>
				{navBaritems.map((navBarItem) => (
					<Link className="navbar-link-btn" to={navBarItem.href} key={navBarItem.label}>
						{navBarItem.label}
					</Link>
				))}
			</nav>
		</>
	);
};

export default Navbar;
