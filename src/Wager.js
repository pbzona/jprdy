import React from 'react';
import './styles/Wager.css';

const Wager = ({index, onWager}) => {
	return (
		<div className="player-container">
			<input className="player-wager" placeholder="Wager" />
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
};

export default Wager;