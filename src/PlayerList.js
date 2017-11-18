import React from 'react';
import './styles/PlayerList.css';

import Player from './Player';

const PlayerList = props => {
  const playerList = props.players.map((player, idx) => {
    if (idx === props.isWagering - 1) {
      return (
        <Player
          key={idx}
          index={idx}
          player={player}
          onAnswer={props.onAnswer}
          onWager={props.onWager}
          onStartWager={props.onStartWager}
          isWagering={props.isWagering}
          createPlayer={props.createPlayer}
          score={props.playerScores[idx]}
          round={props.round}
        />
      );
    } else if (idx === props.players.length - 1) {
      return (
        <Player
          key={idx}
          index={idx}
          player={player}
          onAnswer={props.onAnswer}
          onWager={props.onWager}
          onStartWager={props.onStartWager}
          isWagering={props.isWagering}
          needName={props.needName}
          createPlayer={props.createPlayer}
          score={props.playerScores[idx]}
          round={props.round}
        />
      );
    }
    return (
      <Player
        key={idx}
        index={idx}
        player={player}
        onAnswer={props.onAnswer}
        score={props.playerScores[idx]}
        onWager={props.onWager}
        onStartWager={props.onStartWager}
        isWagering={props.isWagering}
        round={props.round}
      />
    );
  });

  return <div className="player-list">{playerList}</div>;
};

export default PlayerList;
