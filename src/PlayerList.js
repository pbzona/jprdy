import React from 'react';
import './styles/PlayerList.css';

import Player from './Player';

const PlayerList = (props) => {
	const playerList = props.players.map((player, idx) => {
		return (
			<Player key={idx} index={idx} player={player} onAnswer={props.onAnswer}/>
		);
	});

	return (
		<div className="player-list">
			{playerList}
		</div>
	);
};

export default PlayerList;