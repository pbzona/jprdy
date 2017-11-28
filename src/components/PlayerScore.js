import React from 'react';

const PlayerScore = props => {
	return (
		<div className="display-player-score">
			<h2 id={`score-${props.index}`} className="score">
				{props.score}
			</h2>
		</div>
	);
};

export default PlayerScore;
