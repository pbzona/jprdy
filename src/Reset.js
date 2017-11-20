import React from 'react';
import './styles/Reset.css';

const Reset = props => {
	return (
		<div>
			<button className="reset-button" onClick={props.onReset}>{props.buttonText}</button>
		</div>
	);
};

export default Reset;