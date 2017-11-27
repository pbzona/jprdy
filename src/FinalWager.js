import React from 'react';

const FinalWager = props => (
	<div className="player-container">
		<div className="display-player-score">
			<h2 id={`score-${props.index}`} className="score">
				{props.score}
			</h2>
		</div>
		<div className="final-wager-container">
			<input
				className={`final-wager final-wager-${props.index}`}
				placeholder="Wager"
			/>
		</div>
		<div className="final-button-container">
			<button
				className="final-button"
				onClick={() => props.onFinalWager(props.index)}
			>
				Done
			</button>
		</div>
	</div>
);

export default FinalWager;
