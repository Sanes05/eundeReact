import Image from "../assets/img1.jpg";
import Textcomponent from "../components/Textcomponent/Textcomponent";
import Cardcomponent from "../components/Cardcomponent/Cardcomponent";
import Contactsection from "../components/Contactsection/Contactsection";
import iconOne from "../assets/icons/icon1.svg";
import iconTwo from "../assets/icons/icon2.svg";
import iconThree from "../assets/icons/icon3.svg";
import "./startseite.css";

export default function Startseite() {
	const textComponentheadline = "Herzlich Willkommen bei der Reinigungsfirma E&E Gebäudereinigung";
	const textArray = [
		"Wir sind die Fachleute für Gebäudereinigung mit denn Aufgabengebieten Gebäudereinigung, Büroreinigung, Praxisreinigung, Baustellenreinigung und Grundreinigungen",
		"Wir nehmen uns Zeit für Sie und beraten Sie umfassend und kompetent ",
		"Unsere oberste Priorität ist eine gründliche und professionelle Reinigung für maximale Kundenzufriedenheit."
	];

	const cardComponentHeadline = ["Startseite", "Leistungen", "Kontakt"];
	const cardComponentText = [
		"test",
		"Gebäudereinigung, Büroreinigung, Praxisreinigung, Baustellenreinigung und Grundreinigungen sind unser Kerngeschäft. ",
		"Überzeugt? Dann vereinbaren Sie mit uns einen kostenlosen Beratungstermin"
	];
	const cardComponentImageSrc = [iconOne, iconTwo, iconThree];

	return (
		<div className="max-width-rapper-center">
			<div className="max-width-rapper">
				<section className="home-section-one">
					<img src={Image} alt="Image" className="home-image-one" />
					<div className="textcoomponent-div">
						<Textcomponent headline={textComponentheadline} text={textArray} />
					</div>
				</section>
				<section className="home-section-card-section">
					<Cardcomponent headline={cardComponentHeadline} text={cardComponentText} image={cardComponentImageSrc} />
				</section>
				<section className="home-section-contact-section">
					<Contactsection />
				</section>
			</div>
		</div>
	);
}
