import {companyInfos, contactItems} from "../../Items.TS";
import "./contactdetails.css";

const Contactdetails = () => {
	return (
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
	);
};

export default Contactdetails;
