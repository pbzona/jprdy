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

      {!props.addingPlayer &&
        props.round < 3 &&
        props.numPlayers >= 1 && (
          <ActionButton
            buttonFunction={props.onToggleRound}
            buttonText={
              props.round < 2 ? 'Double Jeopardy' : 'Back to First Round'
            }
          />
        )}

      {props.round === 2 &&
        props.numPlayers >= 1 &&
        !props.addingPlayer && (
          <ActionButton
            buttonFunction={props.onGoToFinalRound}
            buttonText={'Final Jeopardy'}
          />
        )}

      <ActionButton
        buttonFunction={props.onClearScores}
        buttonText="Clear Scores"
      />
      <ActionButton buttonFunction={props.onReset} buttonText="New Game" />
    </div>
  );
};

export default ActionList;
