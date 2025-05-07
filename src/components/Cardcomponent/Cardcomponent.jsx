import "./cardcomponent.css";
import PropTypes from "prop-types";

export default function Cardcomponent(props) {
	const headlineArray = props.headline;
	const textArray = props.text;
	const imageSrcArray = props.image;

	return (
		<div className="cardcomponent-main-div">
			<div className="card-icon-container">
				{imageSrcArray.map((imgSrc, index) => {
					<img src={imgSrc} alt={headlineArray[index]} key={index} />;
				})}
			</div>
			<div className="headline-container">
				{headlineArray.map((headline) => {
					<h1 className="headline">{headline}</h1>;
				})}
			</div>
			<div className="card-text-container">
				{textArray.map((text) => {
					<p className="card-text">{text}</p>;
				})}
			</div>
		</div>
	);
}

Cardcomponent.propTypes = {
	headline: PropTypes.arrayOf(PropTypes.string).isRequired,
	text: PropTypes.arrayOf(PropTypes.string).isRequired,
	image: PropTypes.arrayOf(PropTypes.string).isRequired
};
