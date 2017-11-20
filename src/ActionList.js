import React from 'react';
import './styles/ActionList.css';

import AddPlayer from './AddPlayer';
import RoundChange from './RoundChange';
import Reset from './Reset';

const ActionList = props => {
	return (
		<div className="action-list">
			<AddPlayer
				onAddPlayer={props.onAddPlayer}
				numPlayers={props.numPlayers}
				shouldDisplay={props.shouldAddPlayerDisplay}
			/>

			<RoundChange
				round={props.round}
				onRoundChange={this.onRoundChange}
				shouldDisplay={props.shouldRoundChangeDisplay}
			/>

			<Reset onReset={props.onReset} buttonText="Reset" />
		</div>
	);
};

export default ActionList;