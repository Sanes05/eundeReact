import "./cardcomponent.css";
import PropTypes from "prop-types";

export default function Cardcomponent(props) {
	const headlineArray = props.headline;
	const textArray = props.text;
	const imageSrcArray = props.image;

	return (
		<>
			{headlineArray.map((headline, index) => (
				<div className="card-component-main-div" key={index}>
					<div className="card-component-img-container">
						<img className="card-component-img" src={imageSrcArray[index]} alt={index} />
					</div>
					<h1 className="card-component-headline">{headline}</h1>
					<p className="card-component-text">{textArray[index]}</p>
				</div>
			))}
		</>
	);
}

Cardcomponent.propTypes = {
	headline: PropTypes.arrayOf(PropTypes.string).isRequired,
	text: PropTypes.arrayOf(PropTypes.string).isRequired,
	image: PropTypes.arrayOf(PropTypes.string).isRequired
};
