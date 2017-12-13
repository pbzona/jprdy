import React from 'react';

import ActionButton from './ActionButton';

const ActionList = props => {
	return (
		<div className="list list--action">
			{!props.addingPlayer &&
				props.numPlayers < 4 &&
				!props.gameInProgress &&
				props.round === 1 && (
					<ActionButton
						buttonFunction={props.onAddPlayer}
						buttonText="Add New Player"
					/>
				)}

			{props.round < 3 &&
				props.numPlayers >= 1 &&
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
