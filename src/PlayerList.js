import React from 'react';
import './styles/PlayerList.css';

import Player from './Player';

const PlayerList = (props) => {
	const playerList = props.players.map((player, idx) => {
		if (idx === props.players.length - 1) {
			return (
				<Player 
				key={idx} 
				index={idx} 
				player={player} 
				onAnswer={props.onAnswer} 
				needName={props.needName}
				createPlayer={props.createPlayer}/>
			);
		}
		return (
			<Player 
				key={idx} 
				index={idx} 
				player={player} 
				onAnswer={props.onAnswer}/>
		);
	});

	return (
		<div className="player-list">
			{playerList}
		</div>
	);
};

export default PlayerList;