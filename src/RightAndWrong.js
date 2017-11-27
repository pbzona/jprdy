import React from 'react';

const RightAndWrong = props => {
	return (
		<div>
			<button
				className="right-wrong-button right"
				onClick={() => props.onFunction(props.index, true)}
			>
				&#x2713;
			</button>
			<button
				className="right-wrong-button wrong"
				onClick={() => props.onFunction(props.index, false)}
			>
				&#x2717;
			</button>
		</div>
	);
};

export default RightAndWrong;
