import React from 'react';

import ActionButton from './ActionButton';

const ActionList = props => {
	return (
		<div className="list list--action">
			{props.shouldAddPlayerDisplay &&
				props.numPlayers < 4 &&
				!props.gameInProgress && (
					<ActionButton
						buttonFunction={props.onAddPlayer}
						buttonText="Add New Player"
					/>
				)}

			{props.shouldRoundChangeDisplay &&
				!props.addingPlayer && (
					<ActionButton
						buttonFunction={props.onRoundChange}
						buttonText={props.round < 2 ? 'Double Jeopardy' : 'Final Jeopardy'}
					/>
				)}

			<ActionButton buttonFunction={props.onReset} buttonText="New Game" />
		</div>
	);
};

export default ActionList;
