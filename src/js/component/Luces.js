import React from "react";
import PropTypes from "prop-types";

const Luces = props => {
	return (
		<div
			className="luz"
			style={{
				backgroundColor:
					props.color === props.lit ? props.color : "gray"
			}}
			onClick={() => props.setLit(props.color)}></div>
	);
};

Luces.propType = {
	color: PropTypes.string,
	lit: PropTypes.string,
	setLit: PropTypes.string
};

export default Luces;
