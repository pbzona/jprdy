import React from 'react';

import RightAndWrong from './RightAndWrong';

const Wager = props => (
	<div className="player-container">
		<div className="display-player-score">
			<h2 id={`score-${props.index}`} className="score">
				{props.score}
			</h2>
		</div>
		<div className="wager-container">
			<input className="player-wager" placeholder="Wager" />
		</div>
		<RightAndWrong index={props.index} onFunction={props.onWager} />
	</div>
);

export default Wager;
