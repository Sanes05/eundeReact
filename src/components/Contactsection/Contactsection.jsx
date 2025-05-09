import Contactform from "../Contactform/Contactfrom";
import Headline from "../Headlinecomponent/Headlinecomponent";
import Contactdetails from "../ContactDetails/Contactdetails";
import "./contactsection.css";

const Contactsection = () => {
	const headline = "Kontakt";
	const backgroundColor = {backgroundColor: "#d60550"};
	const contactHeadline = "Schreiben Sie uns eine E-Mail, rufen Sie uns an oder nutzen Sie das Kontaktformular wir sind Montag bis Freitag in der Zeit von 8:00 bis 14:00 Uhr für Sie da!";
	return (
		<>
			<Headline headline={headline} style={backgroundColor} />
			<div className="contact-headline-div">
				<h4 className="contact-headline">{contactHeadline}</h4>
			</div>
			<div className="contact-section-main-div">
				<Contactform />
				<Contactdetails />
			</div>
		</>
	);
};

export default Contactsection;
