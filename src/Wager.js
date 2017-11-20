import React from 'react';
import './styles/Wager.css';

const Wager = ({ index, onWager, score }) => (
  <div className="player-container">
    <div className="display-player-score">
      <h2 id={`score-${index}`} className="score">
        {score}
      </h2>
    </div>
    <div className="wager-container">
      <input className="player-wager" placeholder="Wager" />
    </div>
    <div>
      <button
        className="answer-button right"
        onClick={() => onWager(index, true)}
      >
        &#x2713;
      </button>
      <button
        className="answer-button wrong"
        onClick={() => onWager(index, false)}
      >
        &#x2717;
      </button>
    </div>
  </div>
);

export default Wager;
