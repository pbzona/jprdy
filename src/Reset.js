import React from 'react';

const Reset = props => {
	return (
		<div>
			<button className="reset-button" onClick={props.onReset}>{props.buttonText}</button>
		</div>
	);
};

export default Reset;