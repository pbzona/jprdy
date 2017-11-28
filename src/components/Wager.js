import React from 'react';

import PlayerScore from './PlayerScore';
import RightAndWrong from './RightAndWrong';

const Wager = props => (
	<div className="player__container">
		<PlayerScore score={props.score} index={props.index} />
		<div className="wager-container">
			<input className="player-wager" placeholder="Wager" />
		</div>
		<RightAndWrong index={props.index} onFunction={props.onWager} />
	</div>
);

export default Wager;
