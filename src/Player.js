import React from 'react';
import './styles/Player.css';

import AddNewPlayer from './AddNewPlayer';
import DailyDouble from './DailyDouble';
import Wager from './Wager';

const Player = props => {
  const fonts = [
    "Rock Salt",
    "Homemade Apple",
    "Amatic SC",
    "Shadows Into Light"
  ];

  let activeFont = 0;

  if (props.needName) {
    return <AddNewPlayer createPlayer={props.createPlayer} />;
  }

  if (props.index + 1 === props.isWagering) {
    return <Wager onWager={props.onWager} index={props.index} />;
  }

  const displayScore =
    props.score >= 0
      ? `$${require("numeral")(props.score).format("0,0")}`
      : `-$${require("numeral")(props.score * -1).format("0,0")}`;

  return (
    <div className="player-container">
      <div className="display-player-score">
        <h2 id={`score-${props.index}`} className="score">
          {displayScore}
        </h2>
      </div>
      <div className={`display-player-name display-player-${props.index}`}>
        <h2
          onClick={() => {
            activeFont = activeFont < 3 ? activeFont + 1 : 0;
            document.querySelector(
              `.display-player-${props.index}`
            ).style.fontFamily = `${fonts[activeFont]}, cursive`;
          }}
        >
          {props.player}
        </h2>
      </div>

      {props.round < 3 && (
        <DailyDouble onStartWager={props.onStartWager} index={props.index} />
      )}

      <div>
        <button
          className="answer-button right"
          onClick={() => props.onAnswer(props.index, true)}
        >
          &#x2713;
        </button>
        <button
          className="answer-button wrong"
          onClick={() => props.onAnswer(props.index, false)}
        >
          &#x2717;
        </button>
      </div>
    </div>
  );
};

export default Player;
