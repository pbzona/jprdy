import React from 'react';
import './styles/Player.css';

const Player = ({ index, player, onAnswer, needName, createPlayer, score }) => {
	const fonts = [
		'Rock Salt',
		'Homemade Apple',
		'Amatic SC',
		'Shadows Into Light'
	];

	let activeFont = 0;

	if (needName) {
		return (
			<div className="player-container">
				<input className="add-new-player" placeholder="Name" />
				<button className="add-player-submit" onClick={createPlayer}>
					Add
				</button>
			</div>
		);
	}

	const displayScore =
		score >= 0
			? `$${require('numeral')(score).format('0,0')}`
			: `-$${require('numeral')(score * -1).format('0,0')}`;

	return (
		<div className="player-container">
			<div className="display-player-score">
				<h2 id={`score-${index}`} className="score">
					{displayScore}
				</h2>
			</div>
			<div className={`display-player-name display-player-${index}`}>
				<h2
					onClick={() => {
						activeFont = activeFont < 3 ? activeFont + 1 : 0;
						document.querySelector(
							`.display-player-${index}`
						).style.fontFamily = `${fonts[activeFont]}, cursive`;
					}}
				>
					{player}
				</h2>
			</div>
			<div>
				<button
					className="answer-button right"
					onClick={() => onAnswer(index, true)}
				>
					&#x2713;
				</button>
				<button
					className="answer-button wrong"
					onClick={() => onAnswer(index, false)}
				>
					&#x2717;
				</button>
			</div>
		</div>
	);
};

export default Player;
