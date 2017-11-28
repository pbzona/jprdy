import React from 'react';

import PlayerScore from './PlayerScore';

const FinalWager = props => (
	<div className="player__container">
		<PlayerScore score={props.score} index={props.index} />
		<div className="final-wager-container">
			<input
				className={`final-wager final-wager-${props.index}`}
				placeholder="Wager"
			/>
		</div>
		<div className="final-button-container">
			<button
				className="player__action button button--final"
				onClick={() => props.onFinalWager(props.index)}
			>
				Done
			</button>
		</div>
	</div>
);

export default FinalWager;
