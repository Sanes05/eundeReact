import Contactform from "../Contactform/Contactfrom";
import Headline from "../Headlinecomponent/Headlinecomponent";
import "./contactsection.css";

const Contactsection = () => {
	const headline = "Kontakt";
	const backgroundColor = {backgroundColor: "#d60550"};
	const contactHeadline = "Schreiben Sie uns eine E-Mail, rufen Sie uns an oder nutzen Sie das Kontaktformular wir sind Montag bis Freitag in der Zeit von 8:00 bis 14:00 Uhr für Sie da!";
	const companyInfos = ["E&E-Gebäudereiniguing", "Sandstraße 64", "13593 Berlin"];
	const contactDetails = [
		{
			href: "tel:030111222333",
			label: "Telefon",
			hrefText: "030111222333"
		},
		{
			href: "mailto:info@ee-gr.de",
			label: "E-Mail",
			hrefText: "info@ee-gr.de"
		},
		{
			href: "https://ee-gr.de",
			label: "Webseite",
			hrefText: "ee-gr.de"
		}
	];
	return (
		<>
			<Headline headline={headline} style={backgroundColor} />
			<div className="contact-headline-div">
				<h4 className="contact-headline">{contactHeadline}</h4>
			</div>
			<div className="contact-section-main-div">
				<Contactform />
				<div className="contact-infos-div">
					<div className="contact-address">
						{companyInfos.map((companyInfo, index) => (
							<p key={index}>{companyInfo}</p>
						))}
					</div>
					<div className="contact-details-div">
						{contactDetails.map((contactDetail) => (
							<div key={contactDetail.label} className="contact-details-text-div">
								<p>{contactDetail.label}:</p>
								<a href={contactDetail.href}>{contactDetail.hrefText}</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Contactsection;
