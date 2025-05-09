import Contactform from "../Contactform/Contactfrom";
import Headline from "../Headlinecomponent/Headlinecomponent";
import "./contactsection.css";
import {contactItems} from "../../Items.TS";

const Contactsection = () => {
	const headline = "Kontakt";
	const backgroundColor = {backgroundColor: "#d60550"};
	const contactHeadline = "Schreiben Sie uns eine E-Mail, rufen Sie uns an oder nutzen Sie das Kontaktformular wir sind Montag bis Freitag in der Zeit von 8:00 bis 14:00 Uhr für Sie da!";
	const companyInfos = ["E&E-Gebäudereiniguing", "Sandstraße 64", "13593 Berlin"];
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
						{contactItems.map((contactDetail) => (
							<div key={contactDetail.label} className="contact-details-text-div">
								<p>{contactDetail.label}:</p>
								<a className="contayct-details-href" href={contactDetail.href}>
									{contactDetail.hrefText}
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Contactsection;
