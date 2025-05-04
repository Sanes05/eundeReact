import Image from "../assets/img1.jpg";
import Textcomponent from "../components/Textcomponent/Textcomponent";
import "./startseite.css";

export default function Startseite() {
	const headline = "Herzlich Willkommen bei der Reinigungsfirma E&E Gebäudereinigung";
	const textArray = [
		"Wir sind die Fachleute für Gebäudereinigung mit denn Aufgabengebieten Gebäudereinigung, Büroreinigung, Praxisreinigung, Baustellenreinigung und Grundreinigungen",
		"Wir nehmen uns Zeit für Sie und beraten Sie umfassend und kompetent ",
		"Unsere oberste Priorität ist eine gründliche und professionelle Reinigung für maximale Kundenzufriedenheit."
	];

	return (
		<div className="max-width-rapper-center">
			<div className="max-width-rapper">
				<section className="home-section-one">
					<img src={Image} alt="Image" className="home-image-one" />
					<div className="textcoomponent-div">
						<Textcomponent headline={headline} text={textArray} />
					</div>
				</section>
			</div>
		</div>
	);
}
