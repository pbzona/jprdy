import React from 'react';

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
          onFinalWager={props.onFinalWager}
          onFinalAnswer={props.onFinalAnswer}
          onFinalAnswerCheck={props.onFinalAnswerCheck}
          finalData={props.finalData}
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
          onFinalWager={props.onFinalWager}
          onFinalAnswer={props.onFinalAnswer}
          onFinalAnswerCheck={props.onFinalAnswerCheck}
          finalData={props.finalData}
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
        onFinalWager={props.onFinalWager}
        onFinalAnswer={props.onFinalAnswer}
        onFinalAnswerCheck={props.onFinalAnswerCheck}
        finalData={props.finalData}
      />
    );
  });

  return <div className="list--players">{playerList}</div>;
};

export default PlayerList;
