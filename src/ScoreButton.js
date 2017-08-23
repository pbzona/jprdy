import React from 'react';
import './styles/ScoreButton.css';

const ScoreButton = ({onSelectValue, value}) => {
	return (
		<div className="score-button-container">
			<button className="score-button" onClick={() => onSelectValue(value)}>${value}</button>
		</div>
	);
};

export default ScoreButton;