import React from 'react';

const ShowAnswer = props => {
	return (
		<div className="show-answer-container">
			<h3 className={`show-answer show-answer-${props.index}`}>
				{props.answer}
			</h3>
		</div>
	);
};

export default ShowAnswer;
