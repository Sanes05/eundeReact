import PropTypes from "prop-types";
import "./textcomponent.css";

export default function Textcomponent(props) {
	const textArray = props.text;

	return (
		<div className="textcomponent-main-div">
			<h1 className="textcomponent-headline">{props.headline}</h1>
			<div className="textcomponent-text-div">
				{textArray.map((textItem) => (
					<p key={textItem} className="textcomponent-p">
						{textItem}
					</p>
				))}
			</div>
		</div>
	);
}

Textcomponent.propTypes = {
	headline: PropTypes.string.isRequired,
	text: PropTypes.arrayOf(PropTypes.string).isRequired
};
