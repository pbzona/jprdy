import React from 'react';

const ScoreButton = ({ onSelectValue, value, buttonKey }) => {
	return (
		<div className="score-button-container">
			<button
				className={`score-button button-${buttonKey}`}
				onClick={() => onSelectValue(value, buttonKey)}
			>
				${value}
			</button>
		</div>
	);
};

export default ScoreButton;
