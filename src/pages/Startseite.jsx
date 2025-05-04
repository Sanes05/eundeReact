import Image from "../assets/img1.jpg";
import Textcomponent from "../components/Textcomponent/Textcomponent";
import "./startseite.css";

export default function Startseite() {
	const textArray = ["Wir sind die Fachleute für Gebäudereinigung mit denn Aufgabengebieten Gebäudereinigung, Büroreinigung, Praxisreinigung, Baustellenreinigung und Grundreinigungen"];
	return (
		<div className="max-width-rapper-center">
			<div className="max-width-rapper">
				<section className="home-section-one">
					<img src={Image} alt="Image" className="home-image-one" />
					<Textcomponent headline="Wilkommen" text={textArray} />
				</section>
			</div>
		</div>
	);
}
