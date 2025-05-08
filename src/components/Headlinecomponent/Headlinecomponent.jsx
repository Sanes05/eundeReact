import PropTypes from "prop-types";
import "./headlinecomponent.css";

const Headlinecomponent = (props) => {
	return (
		<div className="headline-component-main-div" style={props.style}>
			<h1 className="headline-component-headline">{props.headline}</h1>
		</div>
	);
};

Headlinecomponent.propTypes = {
	headline: PropTypes.string.isRequired,
	style: PropTypes.object.isRequired
};

export default Headlinecomponent;
