import React from 'react';

const ShowAnswer = props => {
	return (
		<div className="player__action show-answer__container">
			<h3 className={`show-answer__text show-answer-${props.index}`}>
				{props.answer}
			</h3>
		</div>
	);
};

export default ShowAnswer;
