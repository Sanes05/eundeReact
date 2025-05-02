import {Link} from "react-router-dom";

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
			label: "Impressum"
		}
	];

	return (
		<>
			<nav>
				{navBaritems.map((navBarItem) => (
					<Link to={navBarItem.href} key={navBarItem.label}>
						{navBarItem.label}
					</Link>
				))}
			</nav>
		</>
	);
};

export default Navbar;
