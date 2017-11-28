import React from 'react';

import PlayerScore from './PlayerScore';

const FinalAnswer = props => (
	<div className="player__container">
		<PlayerScore score={props.score} index={props.index} />
		<div className="final-answer-container">
			<input
				className={`final-answer final-answer-${props.index}`}
				placeholder="What is..."
			/>
		</div>
		<div className="final-button-container">
			<button
				className="player__action button button--final"
				onClick={() => props.onFinalAnswer(props.index)}
			>
				Done
			</button>
		</div>
	</div>
);

export default FinalAnswer;
