import React from 'react';
import './styles/Player.css';

const Player = ({index, player, onAnswer, needName, createPlayer, score}) => {
	const fonts = ['Rock Salt', 'Homemade Apple', 'Amatic SC', 'Shadows Into Light'];

	if (needName) {
		return (
			<div className="player-container">
				<input className="add-new-player" placeholder="Name" />
				<button className="add-player-submit" onClick={createPlayer}>Add</button>
			</div>
		);
	}

	const displayScore = score >= 0 ? `$${score}` : `-$${Math.abs(score)}`;

	return (
		<div className="player-container">
			<div className="display-player-score">
				<h2 id={`score-${index}`}>{displayScore}</h2>
			</div>
			<div className={`display-player-name display-player-${index}`}>
				<h2 onClick={() => {
					let number = Math.floor(Math.random() * fonts.length);
					document.querySelector(`.display-player-${index}`).style.fontFamily = `${fonts[number]}, cursive`
				}}>{player}</h2>
			</div>
			<div>
				<button className="answer-button right" onClick={() => onAnswer(index, true)}>
					&#x2713;
				</button>
				<button className="answer-button wrong" onClick={() => onAnswer(index, false)}>
					&#x2717;
				</button>
			</div>
		</div>
	);
};

export default Player;