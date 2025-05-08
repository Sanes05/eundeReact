import Headlinecomponent from "../../components/Headlinecomponent/Headlinecomponent";

export default function Impressum() {
	const headline = "Impressum";
	const backgroundColor = {backgroundColor: "#d60550"};
	return (
		<>
			<Headlinecomponent headline={headline} style={backgroundColor} />
		</>
	);
}
