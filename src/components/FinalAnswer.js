import React from 'react';

const FinalAnswer = props => (
	<div className="player-container">
		<div className="display-player-score">
			<h2 id={`score-${props.index}`} className="score">
				{props.score}
			</h2>
		</div>
		<div className="final-answer-container">
			<input
				className={`final-answer final-answer-${props.index}`}
				placeholder="What is..."
			/>
		</div>
		<div className="final-button-container">
			<button
				className="final-button"
				onClick={() => props.onFinalAnswer(props.index)}
			>
				Done
			</button>
		</div>
	</div>
);

export default FinalAnswer;
